"use client";

import { useState } from "react";

type FaqsProps = {
  items: FaqsItem[];
};

type FaqsItem = {
  question: string;
  answer: string;
};

const Item = ({ question, answer }: FaqsItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faqs({ items }: FaqsProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-12">
          <div className="bd-faqs">
            <div className="accordion">
              {items.map((item: FaqsItem, index: number) => (
                <Item
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
