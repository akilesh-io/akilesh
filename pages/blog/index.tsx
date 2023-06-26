import slugify from "slugify";

import Layout from "@/components/Layout";
import { ArticleList } from "@/components/ArticleList";
//import { TotalArticles } from "@/components/statistics/TotalArticles";

import { getAllArticles, convertToArticleList } from "@/lib/notion";

export default function Blog({ articles }) {
  return (
    <Layout>
       <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-sky-400">
          My Blog
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Tech, Life, and Everything in Between
        </span>
      </h1>
      <ArticleList articles={articles} showEndMessage fullHeight />
      {/* <TotalArticles /> */}
    </Layout>
  );
}


export async function getStaticProps() {
  const data = await getAllArticles(process.env.NOTION_DATABASE_ID);
  const { articles, tags } =  convertToArticleList(data);

  const blogArticles = articles.filter((article) => article.status === "Publish");

  return {
    props: {
      articles: blogArticles,
    },
    revalidate: 30,
  };
}