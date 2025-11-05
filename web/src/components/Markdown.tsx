import * as React from "react";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";

marked.use(mangle());
marked.use(gfmHeadingId({ prefix: "" }));

type Props = {
  content: string;
};

export function Markdown({ content }: Props) {
  return (
    <div
      className="bd-markdown"
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  );
}
