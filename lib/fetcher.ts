export const fetcher: <TResponse>(url: string) => Promise<TResponse> = (
  url: string
) => fetch(url).then((res) => res.json());
