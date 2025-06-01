type Post = {
  id?: string;
  createdAt?: string;
  slug?: string;
  title: string;
  desc: string;
  img: string | null;
  views?: number;
  catSlug: string;
  userEmail?: string;
  user?: User;
};

type PostResponse = {
  post: Post;
  status: number;
};

type Posts = {
  count: number;
  posts: Post[];
};
