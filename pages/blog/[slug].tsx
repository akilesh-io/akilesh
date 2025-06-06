import { Fragment, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PageType, SubscribeSize } from "@/lib/types";
import {
  getAllArticles,
  getArticlePage,
  getMoreArticlesToSuggest,
} from "@/lib/notion";

import { ArticleList } from "@/components/ArticleList";
import { CodeBlock } from "@/components/Codeblock";
import Layout from "layout/Layout";

import { Client } from "@notionhq/client";
import Image from "next/legacy/image";
import slugify from "slugify";
import { useRouter } from "next/router";

// Required for renderBlock
import { AnchorLink } from "@/components/AnchorLink";
import { Callout } from "@/components/Callout";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={index}
        className={[
          bold ? "font-bold" : null,
          italic ? "font-fancy text-black dark:text-white" : null,
          code
            ? "bg-indigo-200 dark:bg-indigo-900 dark:bg-opacity-50 text-indigo-500 dark:text-indigo-200 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base font-mono"
            : null,
          strikethrough ? "line-through" : null,
          underline ? "underline" : null,
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? (
          // <CustomLink href={text.link.url}>{text.content}</CustomLink>
          <a>{text.content}</a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

export function renderBlocks (block) {
  const { type, id } = block;
  const value = block[type];

  
  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <AnchorLink text={value.rich_text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <AnchorLink text={value.rich_text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <AnchorLink text={value.rich_text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label
            htmlFor={id}
            className="flex items-center justify-start space-x-3"
          >
            <input
              id={id}
              aria-describedby={value.text}
              name={id}
              type="checkbox"
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption =
        value.caption.length >= 1 ? value.caption[0].plain_text : "";
      return (
        <figure
          className="mt-0 aspect-video"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            // placeholder="blur"
            className="rounded-xl"
            layout="fill"
            sizes="100vw"
            objectFit="cover"
            alt={
              caption
                ? caption
                : "A visual depiction of what is being written about"
            }
            src={src}
          />
          {caption && (
            <figcaption className="text-center">{caption}</figcaption>
          )}
        </figure>
      );
    case "code":
      return (
        <CodeBlock
          language={value.language}
          code={value.rich_text[0].text.content}
        />
      );
    case "callout":
      return (
        <Callout>
          {value.icon && <span>{value.icon.emoji}</span>}
          <div>
            <Text text={value.text} />
          </div>
        </Callout>
      );
    case "embed":
      const codePenEmbedKey = value.url.slice(value.url.lastIndexOf("/") + 1);
      return (
        <div>
          <iframe
            height="600"
            className="w-full"
            scrolling="no"
            title="Postage from Bag End"
            src={`https://codepen.io/2112akilesh/embed/preview/${codePenEmbedKey}?default-tab=result`}
            frameBorder="no"
            loading="lazy"
            allowFullScreen={true}
          >
            See the Pen <a href={value.url}>Postage from Bag End</a> by Braydon
            Coyer (<a href="https://codepen.io/2112akilesh">@2112akilesh</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      );
    case "table_of_contents":
      return <div>TOC</div>;
    case "video":
      return <YoutubeEmbed url={value.external.url} />;
    case "quote":
      return (
        <blockquote className="p-4 rounded-r-lg">
          <Text text={value.rich_text} />
        </blockquote>
      );
    case "divider":
      return (
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
}

const ArticlePage = ({
  content,
  title,
  coverImage,
  slug,
  moreArticles,
}) => {
  const { push } = useRouter();

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: "POST",
    });
  }, [slug]);

  return (
    <Layout
    // title={title}
    //description={content}
    // imageUrl={coverImage}
    //type={PageType.ARTICLE}
    // isArticle={true}
    >
      <div className="grid justify-center grid-cols-1 lg:grid-cols-12 lg:gap-8 prose prose-lg dark:prose-dark max-w-none ">
        <article className="col-span-12 mt-12">
          <div className="space-y-16">
            <div>
              <h1 className="mb-5 text-3xl text-center font-openSans md:text-5xl">
                {title}
              </h1>
            </div>
            <div>
              <div
                className="aspect-video lg:aspect-[2/1]"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  className="rounded-3xl"
                  layout="fill"
                  sizes="100vw"
                  objectFit="cover"
                  src={coverImage}
                  alt={"article cover"}
                  priority
                />
              </div>
            </div>
          </div>
        </article>
        {/* Left Sticky */}

        <div className="lg:col-start-1 lg:col-end-13 text-lg">
          {content.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </div>

        {/* Height must be applied to extend height to length of article container */}

        <div className="col-span-12">
          <div className="mt-16 font-bold text-center">
            <p className="text-base">Share this article</p>
            {/* <ShareArticle title={title} slug={slug} /> */}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="mb-8">Related articles</h3>
          <ArticleList articles={moreArticles} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string } }[] = [];
  const data: any = await getAllArticles(process.env.NOTION_DATABASE_ID);

  data.forEach((result) => {
    if (result.object === "page") {
      paths.push({
        params: {
          slug: slugify(
            result.properties.Name.title[0].plain_text
          ).toLowerCase(),
        },
      });
    }
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  if (!params || typeof params.slug !== "string") {
    return {
      notFound: true,
    };
  }
  const slug = params.slug;

  let content: any[] = [];
  let articleTitle = "";
  let publishedDate = null;
  let coverImage = null;

  const notion = new Client({
    auth: process.env.NOTION_KEY,
  });

  const data: any = await getAllArticles(process.env.NOTION_DATABASE_ID);

  const page: any = getArticlePage(data, slug);

  articleTitle = page.properties.Name.title[0].plain_text;
  publishedDate = page.properties['Publish date'].date.start;
  coverImage =
    page.cover?.file?.url ||
    page.cover?.external?.url ||
    page.properties?.coverImage?.files[0]?.file?.url ||
    page.properties.coverImage?.files[0]?.external?.url ||
    "https://via.placeholder.com/600x400.png";

  const moreArticles: any = await getMoreArticlesToSuggest(
    process.env.NOTION_DATABASE_ID,
    articleTitle
  );

  let blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  content = [...blocks.results];

  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      block_id: page.id,
      start_cursor: blocks.next_cursor ?? undefined,
    });

    content = [...content, ...blocks.results];
  }

  return {
    props: {
      content,
      title: articleTitle,
      publishedDate,
      slug,
      coverImage,
      moreArticles,
    },
    revalidate: 30,
  };
};

export default ArticlePage;
