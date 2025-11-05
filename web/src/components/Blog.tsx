import Link from "next/link";
import { PostType } from "@/loaders/posts";
import PageTitle from "./Common/PageTitle";
import { nl, np } from "@/lib/navigation";
import { Locale, tl } from "@/lib/locale";
import Image from "next/image";
import { truncate } from "lodash";

type Props = {
  locale: Locale;
  posts: PostType[];
  page: number;
  pageCount: number;
};

type PostCardProps = {
  locale: Locale;
  post: PostType;
};

function PostCard({ locale, post }: PostCardProps) {
  const t = tl(locale);
  const p = np(locale);

  const { slug, title, author, cover, publishedAt, date } = post;
  const { name, photo } = author || {
    name: "Paula Bao",
    photo: { data: {} },
  };
  const imageUrl = photo.url ?? "";
  const coverImageUrl = cover?.url ?? "";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const link = p(date || publishedAt, slug);
  const truncatedTitle = truncate(title, { length: 70 });

  return (
    <article className="col-xl-4 col-lg-4 col-md-6">
      <div className="bd-blog mb-30">
        <div className="bd-blog-img">
          <Link href={link}>
            <Image
              src={coverImageUrl || "/assets/img/blog/blog-img-1.jpg"}
              alt={title}
              width={410}
              height={250}
            />
          </Link>
        </div>
        <div className="bd-blog-text">
          <div className="bd-blog-meta mb-15">
            <ul>
              <li>
                <Link href={link}>
                  <i className="flaticon-calendar"></i>
                  {new Date(date || publishedAt).toLocaleDateString(
                    locale,
                    options,
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <h4
            className="bd-blog-title mb-30"
            style={{ minHeight: "66px", maxHeight: "66px" }}
          >
            <Link href={link}>{truncatedTitle}</Link>
          </h4>
          <div className="bd-blog-author">
            <div className="bd-blog-author-info">
              <Image
                src={imageUrl}
                alt={name}
                width={20}
                height={20}
                style={{ objectFit: "cover" }}
              />
              <h6 className="bd-blog-author-info-title">{name}</h6>
            </div>
            <div className="bd-blog-author-link">
              <Link href={link}>
                {t("blog.read_more")} <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Blog({ locale, posts, page, pageCount }: Props) {
  const n = nl(locale);
  const t = tl(locale);

  return (
    <>
      <PageTitle
        locale={locale}
        title={t("sections.blog")}
        breadcrumbs={[
          {
            title: t("sections.blog"),
            href: n("blog"),
          },
        ]}
        asChild="h1"
      />
      <section className="bd-blog-area pt-150 pb-145">
        <div className="container">
          {posts && (
            <div className="row mb-30">
              {posts.map((post, index) => (
                <PostCard key={index} locale={locale} post={post} />
              ))}
            </div>
          )}
          <div className="row">
            <div className="col-12">
              <div className="basic-pagination">
                <ul>
                  {Array.from(Array(pageCount).keys()).map((i) => {
                    if (i === page - 1) {
                      return (
                        <li key={i}>
                          <span
                            aria-current="page"
                            className="page-numbers current"
                          >
                            {i + 1}
                          </span>
                        </li>
                      );
                    }

                    return (
                      <li key={i}>
                        <a
                          className="page-numbers"
                          href={`${n("blog")}?page=${i + 1}`}
                        >
                          {i + 1}
                        </a>
                      </li>
                    );
                  })}
                  {page < pageCount && (
                    <li>
                      <a
                        className="next page-numbers"
                        href={`${n("blog")}?page=${page + 1}`}
                      >
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
