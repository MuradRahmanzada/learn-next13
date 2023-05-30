import { IPost } from "@/types";
import Card from "./Card";

const Blog = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data: IPost[] = await res.json();

  return (
    <div>
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Blog;
