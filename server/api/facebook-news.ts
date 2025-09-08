// server/api/facebook-news.ts
export default defineEventHandler(async () => {
  const PAGE_ID = 'YOUR_PAGE_ID';
  const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

  const res = await $fetch(
    `https://graph.facebook.com/${PAGE_ID}/posts?access_token=${ACCESS_TOKEN}`
  );

  return res;
});
