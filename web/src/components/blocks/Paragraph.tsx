import { Markdown } from "../Markdown";

type TextProps = {
  text: string;
};

export default function Paragraph({ text }: TextProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Markdown content={text} />
        </div>
      </div>
    </div>
  );
}
