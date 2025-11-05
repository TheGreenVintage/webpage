import { ComponentContentText } from "@/generated/graphql";
import { Markdown } from "@/components/Markdown";
import { PostType } from "@/loaders/post";
import Image from "next/image";
import Lightroom from "./blocks/Lightroom";
import classNames from "classnames";
import { Locale } from "@/lib/locale";
import { mapPicture, RawPictureType } from "./DynamicContentPage";

type Props = {
  locale: Locale;
  compact?: boolean;
  content: any[];
};

type TextProps = {
  content: ComponentContentText;
};

function TextContent({ content }: TextProps) {
  const text = content.text;

  if (!text) return null;

  const fixedText = text.replace(/^# /, "## "); // Fix for markdown h1 heading

  return <Markdown content={fixedText} />;
}

type ImageProps = {
  content: any; // ComponentContentImage
  locale: Locale;
};

function ImageContent({ content, locale }: ImageProps) {
  const alt = content.alt;

  if (!content.picture) return null;

  const { url: imageUrl, alternativeText } = mapPicture(
    content.picture,
    locale,
  );

  return (
    <figure style={{ textAlign: "center" }}>
      <Image
        className="img-fluid"
        src={imageUrl}
        alt={alt || alternativeText || ""}
        style={{ minWidth: "75%", borderRadius: 10 }}
        width={600}
        height={400}
      />
    </figure>
  );
}

type GalleryProps = {
  content: any; // ComponentContentGallery
  locale: Locale;
};

function GalleryContent({ content, locale }: GalleryProps) {
  const media = content.media.map((image: RawPictureType) =>
    mapPicture(image, locale),
  );

  return (
    <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8 not-format">
      <Lightroom images={media} />
    </div>
  );
}

type QuoteProps = {
  content: any;
};

function QuoteContent({ content }: QuoteProps) {
  const { quote, author } = content;

  return (
    <blockquote>
      <p>{quote}</p>
      <p>
        <cite>{author}</cite>
      </p>
    </blockquote>
  );
}

type ChecklistProps = {
  content: any;
};

type ChecklistItem = {
  text: string;
};

function ChecklistContent({ content }: ChecklistProps) {
  const { title, items } = content;

  return (
    <div className="bd-service-details-feature mt-40 mb-40">
      {title && <h5 className="mb-20">{title}</h5>}
      <ul>
        {items.map((item: ChecklistItem, index: number) => (
          <li key={index}>
            <i className="far fa-check"></i> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

type FaqsProps = {
  content: any;
};

type FaqsItem = {
  question: string;
  answer: string;
};

function FaqsContent({ content }: FaqsProps) {
  const { items } = content;

  // FIXME: This hard-coded faqs id is a temporary solution

  return (
    <div className="bd-faqs">
      <div className="accordion" id="accordionExample">
        {items.map((item: FaqsItem, index: number) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                {item.question}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Yolo = NonNullable<PostType["content"]>;

function Content({
  content,
  locale,
}: {
  content: NonNullable<Yolo[number]>;
  locale: Locale;
}) {
  if (!content) return null;
  if (content.__typename === "ComponentContentText") {
    return <TextContent content={content} />;
  }

  if (content.__typename === "ComponentContentImage") {
    return <ImageContent content={content} locale={locale} />;
  }

  if (content.__typename === "ComponentContentGallery") {
    return <GalleryContent content={content} locale={locale} />;
  }

  if (content.__typename === "ComponentContentQuote") {
    return <QuoteContent content={content} />;
  }

  if (content.__typename === "ComponentContentChecklist") {
    return <ChecklistContent content={content} />;
  }

  if (content.__typename === "ComponentContentFaqs") {
    return <FaqsContent content={content} />;
  }

  throw new Error(`Unknown component ${content.__typename}`);
}

export default function DynamicComponentPostPage({
  content,
  compact = false,
  locale,
}: Props) {
  if (!content || content.length === 0) return null;

  return (
    <div className={classNames("distributed-container", "small", { compact })}>
      {content.map((item, index) => (
        <Content key={index} content={item!} locale={locale} />
      ))}
    </div>
  );
}
