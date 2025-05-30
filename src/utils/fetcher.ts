export const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.statusText}`);
  }

  return res.json();
};

export const postData = async <T>(url: string, data: unknown): Promise<T> => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`POST failed: ${res.statusText}`);
  }

  return res.json();
};
