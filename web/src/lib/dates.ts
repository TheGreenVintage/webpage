export function daysAgo(publishedAt: string) {
  const date1 = new Date(publishedAt);
  const date2 = new Date();

  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
