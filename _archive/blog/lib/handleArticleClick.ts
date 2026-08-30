import router from 'next/router';

export function handleArticleClicked(slug) {
  const item = localStorage.getItem(slug);
  const localData = item ? JSON.parse(item) : {};
  if (typeof window !== 'undefined') {
    localStorage.setItem(
      slug,
      JSON.stringify({ ...localData, has_read: true })
    );
  }

  router.push(`/blog/${slug}`);
}
