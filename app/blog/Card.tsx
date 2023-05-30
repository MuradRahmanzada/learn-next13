import { IPost } from "@/types";
import Link from "next/link";

interface ICard {
  item: IPost;
}

const Card = ({ item }: ICard) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <Link href={`/blog/${item.id}`}>Read More</Link>
    </div>
  );
};

export default Card;
