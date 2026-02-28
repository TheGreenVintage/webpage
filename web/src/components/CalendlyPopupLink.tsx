"use client";

type Props = {
  label: string;
};

export default function CalendlyPopupLink({ label }: Props) {
  return (
    <a
      className="theme-btn plausible-event-name=Calendly mt-10"
      href=""
      onClick={(event) => {
        event.preventDefault();
        if (!(window as any).Calendly) return;

        (window as any).Calendly.initPopupWidget({
          url: "https://calendly.com/thegreenvintage-info/30min?hide_gdpr_banner=1&primary_color=66ac82",
        });
      }}
    >
      {label}
    </a>
  );
}
