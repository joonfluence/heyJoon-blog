import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  category: string;
  excerpt?: string;
  author?: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  category,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          category={category}
          slug={slug}
          title={title}
          src={coverImage}
        />
      </div>
      <h3 className="text-2xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/category/[category]/[id]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      {/* <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div> */}
    </div>
  );
};

export default PostPreview;
