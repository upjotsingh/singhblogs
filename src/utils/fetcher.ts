export const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) {
    console.log(res);
    throw new Error(`Fetch failed: ${res.statusText}`);
  }

  return res.json();
};

export const postData = async <TInput, TResponse>(
  url: string,
  { arg }: { arg: TInput }
): Promise<TResponse> => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });

  if (!res.ok) {
    throw new Error(`POST failed: ${res.statusText}`);
  }

  return res.json();
};
