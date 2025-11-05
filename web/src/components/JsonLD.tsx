type Props = {
  jd: Record<string, unknown>;
};

export default function JsonLD({ jd }: Props) {
  const __html = JSON.stringify(jd);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html }} />
  );
}
