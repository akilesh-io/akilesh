import { ArticleCard } from "@/components/ArticleCard";
import Image from "next/image";
import lemon from "../public/svg/lemon.svg";

export function ArticleList({
  articles,
  showEndMessage = false,
  fullHeight = false,
}) {
  return (

    <div className={`space-y-12 ${fullHeight && "min-h-screen "}`}>
      <div className="grid grid-cols-1 gap-8 list-none md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      {showEndMessage && (
        <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 dark:text-slate-500">
          <button
            data-tf-popup="MZSKhS0J"
            data-tf-opacity="100"
            data-tf-size="100"
            data-tf-iframe-props="title=Newsletter Signup Form"
            data-tf-transitive-search-params
            data-tf-medium="snippet"
          >
            Blog posted with Lamonto.
          </button>
          <Image src={lemon} alt="lemon" width={30} />
        </div>
      )}
    </div>
  );
}
