type Post = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string | null;
  views: number;
  catSlug: string;
  userEmail: string;
  user: User;
};
