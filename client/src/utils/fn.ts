export const formatSeconds = (s: number): string =>
  new Date(s * 1000).toISOString().slice(14, 19);