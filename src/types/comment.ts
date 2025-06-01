type Comments = {
  id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  user: User;
  postSlug: string;
  post: Post;
};

type PostComment = {
  desc: string;
  postSlug: string;
};

type CommentResponse = {
  comment: Comments;
  status: number;
};
