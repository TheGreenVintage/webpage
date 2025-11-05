import type { JSX } from "react";
type Props = {
  pretitle: string;
  title: string;
  description: string;
  asChild?: string | null;
};

export default function Hero({ pretitle, title, description, asChild }: Props) {
  const Title = (asChild ?? "h2") as keyof JSX.IntrinsicElements;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bd-section-title-wrapper text-center">
            <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
            <Title className="bd-section-title mb-25">{title}</Title>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
