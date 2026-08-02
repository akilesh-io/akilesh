import { Article } from '@/lib/types';
import Image from 'next/image';
import slugify from 'slugify';

//import { useIsArticleRead } from '@/hooks/useIsArticleRead';
import { handleArticleClicked } from '@/lib/handleArticleClick';


type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  return (
    <div>
      <button onClick={() => handleArticleClicked(slug)}>
        <div className="group">
          <Image
            className="rounded-md object-cover group-hover:opacity-75"
            src={article.coverImage}
            placeholder="blur"
            blurDataURL={article.coverImage}
            width={684}
            height={350}
            alt={'article cover'}
          />
          <div className="w-full text-left">
            <h3 className="mt-2 text-2xl">{article.title}</h3>
            {/* <span className="flex items-center text-base font-semibold">
              {' '}
            </span> */}
          </div>
        </div>
      </button>
    </div>
  );
}
