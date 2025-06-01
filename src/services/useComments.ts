import { Comments, PostComment } from "@/types/comment";
import { getData, postData } from "@/utils/fetcher";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
// import useSWRMutation from "swr/mutation";
// import type { Comments, PostComment } from "@/types/comment";

// Get all cats
export function getComments(postSlug: string) {
  const { data, error, isLoading, mutate } = useSWR<Comments[]>(
    `/api/comments?postSlug=${postSlug}`,
    getData
  );

  return {
    comments: data,
    isLoading,
    isError: error,
    mutate,
  };
}

export function postComment() {
  const { trigger, data, error, isMutating } = useSWRMutation<
    CommentResponse,
    any,
    string,
    PostComment
  >("/api/comments", postData<PostComment, CommentResponse>);

  return {
    post: trigger,
    comment: data,
    isPostLoading: isMutating,
    postError: error,
  };
}
