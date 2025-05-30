import { getData } from "@/utils/fetcher";
import useSWR from "swr";

// Get all cats
export function getCategories(isPop = false) {
  const { data, error, isLoading } = useSWR<Category[]>(
    `/api/categories${isPop ? "?isPop=true" : ""}`,
    getData
  );

  return {
    category: data,
    isLoading,
    isError: error,
  };
}
