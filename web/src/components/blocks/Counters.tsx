"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type Counter = {
  value: number;
  description: string;
};

type Props = {
  counters: readonly Counter[];
};

export default function Counters({ counters }: Props) {
  const [isViewCount, setIsViewCount] = useState(false);

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setIsViewCount(!isViewCount);
    }
  };

  return (
    <section className="bd-fact-area-four">
      <div className="bd-custom-container">
        <div className="bd-fact-area-four-bg gray-bg pt-110 pb-85">
          <div className="container">
            {counters && (
              <div className="row">
                {counters.map((counter, num) => (
                  <div key={num} className="col-lg-3 col-sm-6">
                    <div className="bd-fact mb-30">
                      <div className="bd-fact-inner">
                        <h2 className="bd-fact-title">
                          <span className="">
                            <VisibilitySensor
                              onChange={onVisibilityChange}
                              offset={{ top: 10 }}
                              delayedCall
                            >
                              <CountUp end={!isViewCount ? counter.value : 0} />
                            </VisibilitySensor>
                          </span>
                        </h2>
                        <span className="bd-fact-subtitle">
                          {counter.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
