"use client";

import { Locale, tl } from "@/lib/locale";
import { requestQuote } from "@/lib/requestQuote";
import { useEffect, useRef, useState } from "react";

type Props = {
  locale: Locale;
};

export default function ContactForm({ locale }: Props) {
  const [sending, setSending] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const textAreaFake = useRef<HTMLTextAreaElement>(null);
  const t = tl(locale);

  useEffect(() => {
    if (!textArea.current) return;

    textArea.current.placeholder = t("contact.form.message");
  }, []);

  useEffect(() => {
    if (!textAreaFake.current) return;

    textAreaFake.current.value = "";
  }, []);

  return (
    <form action={requestQuote}>
      <input type="hidden" name="locale" value={locale} />
      <div className="bd-contact-field mb-20">
        <input
          name="name"
          type="text"
          placeholder={t("contact.form.name")}
          onKeyDown={() => setTyping(true)}
        />
      </div>
      <div className="bd-contact-field mb-20">
        <input
          name="phone"
          type="text"
          placeholder={t("contact.form.phone")}
          onKeyDown={() => setTyping(true)}
        />
      </div>
      <div className="bd-contact-field mb-20">
        <input
          name="email"
          type="text"
          placeholder={t("contact.form.email")}
          onKeyDown={() => setTyping(true)}
        />
      </div>
      <div className="bd-contact-field mb-20">
        <input
          name="subject"
          type="text"
          placeholder={t("contact.form.subject")}
          onKeyDown={() => setTyping(true)}
        />
      </div>
      <div className="bd-contact-field mb-20">
        <textarea
          name="ignore"
          ref={textArea}
          onKeyDown={() => setTyping(true)}
        ></textarea>
      </div>
      <div className="bd-contact-field mb-20 nhighlight">
        <textarea
          name="message"
          ref={textAreaFake}
          placeholder={t("contact.form.message")}
          onKeyDown={() => setTyping(true)}
        ></textarea>
      </div>
      <input type="hidden" name="ty" value={String(typing)} />
      <input type="hidden" name="co" value={String(coordinates)} />
      <div className="bd-contact-field">
        <button
          type="submit"
          className="theme-btn theme-btn w-full"
          disabled={sending}
          onMouseDown={(event) => {
            setCoordinates([event.clientX, event.clientY]);
          }}
          onSubmit={() => setSending(true)}
          onKeyDown={() => setCoordinates([-1, -1])}
        >
          {sending ? t("contact.form.sending") : t("contact.form.submit")}
        </button>
      </div>
    </form>
  );
}
