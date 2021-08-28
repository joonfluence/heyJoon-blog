import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  category: string;
  coverImage: string;
  date: string;
  excerpt?: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  category,
  coverImage,
  date,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          category={category}
          src={coverImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              as={`/category/${category}/${slug}`}
              href="/category/[category]/[id]"
            >
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          {/* <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
