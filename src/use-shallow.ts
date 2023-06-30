export const useShallow = (): [URLSearchParams, (url: string) => void] => {
  let queries;
  if (typeof window !== "undefined") {
    queries = new URLSearchParams(window.location.search);
  } else {
    queries = new URLSearchParams("");
  }
  const push = (url: string) => {
    history.replaceState(null, "", url);
  };

  return [queries, push];
};
