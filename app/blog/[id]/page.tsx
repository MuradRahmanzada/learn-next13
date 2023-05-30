import { IPost } from "@/types";

interface IBlogDetail {
  params: {
    id: number;
  };
}

const getBlogDetail = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const BlogDetail = async ({ params }: IBlogDetail) => {
  const data: IPost = await getBlogDetail(params.id);
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default BlogDetail;
