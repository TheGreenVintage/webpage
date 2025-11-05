import { PostType, RecentType, RelatedType } from "@/loaders/post";
import Link from "next/link";

import { Locale, tl } from "@/lib/locale";
import { nl, np } from "@/lib/navigation";
import Image from "next/image";
import PageTitle from "./Common/PageTitle";
import { mapPicture } from "./DynamicContentPage";
import DynamicComponentPostPage from "./DynamicContentPostPage";
import { dynamicBlurDataUrl } from "@/lib/images";

type Props = {
  locale: Locale;
  post: PostType;
  recent: RecentType[];
  related: RelatedType[];
};

export default async function Post({ locale, post, recent, related }: Props) {
  const t = tl(locale);
  const n = nl(locale);
  const p = np(locale);

  const { title, publishedAt, date, content, cover } = post;
  const picture = mapPicture(cover, locale);
  const imageUrl = picture.url;

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const blurDataURL = await dynamicBlurDataUrl(imageUrl);
  const blurOptions = blurDataURL
    ? {
        placeholder: "blur" as const,
        blurDataURL: blurDataURL,
      }
    : {};

  return (
    <main>
      <PageTitle
        locale={locale}
        title={t("sections.blog")}
        breadcrumbs={[
          {
            title: t("sections.blog"),
            href: n("blog"),
          },
        ]}
      />

      <section className="bd-blog-deatils-area pt-150 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__details--wrapper mr-50 mb-50">
                <div className="ablog ablog-4 mb-60">
                  <div className="ablog__img">
                    <Image
                      src={picture.url}
                      className="img-fluid"
                      alt={picture.alternativeText || title}
                      width={854}
                      height={480}
                      priority
                      style={{ objectFit: "cover", width: "100%" }}
                      {...blurOptions}
                    />
                  </div>
                  <div className="ablog__text ablog__text4">
                    <div className="bd-blog-meta mb-15">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="flaticon-calendar"></i>
                            {new Date(date || publishedAt).toLocaleDateString(
                              locale,
                              options,
                            )}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h1 className="bd-blog-details-title">{title}</h1>

                    <DynamicComponentPostPage
                      content={content}
                      locale={locale}
                      compact
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ablog__sidebar mb-40">
                <div className="widget mb-45">
                  <h3 className="sidebar__widget--title mb-30">
                    {t("blog.recent_posts")}
                  </h3>

                  {recent.map((item, index) => {
                    const { slug, title, cover, publishedAt, date } = item;
                    const { url: coverImageUrl } = cover || {
                      url: "",
                    };
                    const link = p(date || publishedAt, slug);

                    return (
                      <div key={index} className="sidebar--widget__post mb-20">
                        <div className="sidebar__post--thumb">
                          <Link href={link} rel="dofollow">
                            <Image
                              src={coverImageUrl}
                              className="post__img"
                              alt={title}
                              width={90}
                              height={90}
                              priority
                              style={{ objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                        <div className="sidebar__post--text">
                          <h4 className="sidebar__post--title">
                            <Link href={link}>{title}</Link>
                          </h4>
                          <span>
                            {new Date(date || publishedAt).toLocaleDateString(
                              locale,
                              {
                                ...options,
                                weekday: undefined,
                              },
                            )}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="widget mb-45">
                  <h3 className="sidebar__widget--title mb-30">
                    {t("blog.related_posts")}
                  </h3>

                  {related.map((item, index) => {
                    const { slug, title, cover, publishedAt, date } = item;
                    const { url: coverImageUrl } = cover || {
                      url: "",
                    };
                    const link = p(date || publishedAt, slug);

                    return (
                      <div key={index} className="sidebar--widget__post mb-20">
                        <div className="sidebar__post--thumb">
                          <Link href={link} rel="dofollow">
                            <Image
                              src={coverImageUrl}
                              className="post__img"
                              alt={title}
                              width={90}
                              height={90}
                              priority
                              style={{ objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                        <div className="sidebar__post--text">
                          <h4 className="sidebar__post--title">
                            <Link href={link}>{title}</Link>
                          </h4>
                          <span>
                            {new Date(date || publishedAt).toLocaleDateString(
                              locale,
                              {
                                ...options,
                                weekday: undefined,
                              },
                            )}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
