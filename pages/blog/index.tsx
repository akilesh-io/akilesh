// Blog content has moved to a third-party platform, so this route no longer
// fetches from Notion. The original implementation (getAllArticles,
// convertToArticleList, ArticleList) is kept in lib/notion.ts and
// components/ArticleList.tsx for reference, but is intentionally not called.

import Link from "next/link";
import Layout from "layout/Layout";
// import { ArticleList } from "@/components/ArticleList";
//import { TotalArticles } from "@/components/statistics/TotalArticles";
// import { getAllArticles, convertToArticleList } from "@/lib/notion";

export default function Blog() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The blog has moved
        </h1>
        <p className="text-lg mb-8">
          Head over to the new blog to read the latest articles.
        </p>
        <Link
          href="https://blog.akilesh.in/"
          target="_blank"
          className="underline text-lg font-semibold"
        >
          Visit the blog →
        </Link>
      </div>
      {/* <ArticleList articles={articles} showEndMessage fullHeight /> */}
    </Layout>
  );
}

// export async function getStaticProps() {
//   try {
//     const data = await getAllArticles(process.env.NOTION_DATABASE_ID);
//     const { articles } = convertToArticleList(data);

//     const blogArticles = articles.filter(
//       (article) => article.status === "Publish"
//     );

//     return {
//       props: {
//         articles: blogArticles,
//       },
//       revalidate: 30,
//     };
//   } catch (error) {
//     console.error("Failed to fetch Notion articles for blog index:", error);

//     return {
//       props: {
//         articles: [],
//       },
//       revalidate: 30,
//     };
//   }
// }
