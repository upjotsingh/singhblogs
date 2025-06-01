import { getData, postData } from "@/utils/fetcher";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

// Get Post
export function getPost(postSlug: string) {
  const { data, error, isLoading } = useSWR<Post>(
    `/api/posts/${postSlug}`,
    getData
  );

  return {
    post: data,
    isLoading,
    isError: error,
  };
}

// Get Latest 1 Post
export function getLatestPost() {
  const { data, error, isLoading } = useSWR<Post>("/api/posts/latest", getData);

  return {
    post: data,
    isLoading,
    isError: error,
  };
}

// Get Latest Posts by cat
export function getPosts(page: number, cat: string | null) {
  const { data, error, isLoading } = useSWR<Posts>(
    `/api/posts?page=${page}&cat=${cat || ""}`,
    getData
  );

  return {
    posts: data?.posts,
    count: data?.count || 0,
    isLoading,
    isError: error,
  };
}

// Get Posts picked by editor
export function getPostsPickedByEditor() {
  const { data, error, isLoading } = useSWR<Post[]>(
    `/api/posts/editor`,
    getData
  );

  return {
    posts: data,
    isLoading,
    isError: error,
  };
}

// SUbmit Post
export function submitPost() {
  const { trigger, data, error, isMutating } = useSWRMutation<
    PostResponse,
    any,
    string,
    Post
  >("/api/posts", postData<Post, PostResponse>);

  return {
    savePost: trigger,
    post: data,
    isPostLoading: isMutating,
    postError: error,
  };
}
