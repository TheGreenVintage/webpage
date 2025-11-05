import { ComponentBlocksSubprogress } from "@/generated/graphql";

type Props = {
  pretitle: string;
  title: string;
  description: string;
  items: Array<Omit<ComponentBlocksSubprogress, "id">>;
};

export default function Skills({ pretitle, title, description, items }: Props) {
  return (
    <section className="bd-skill-area gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bd-section-title-wrapper mb-30">
              <h5 className="bd-section-subtitle mb-15">{pretitle}</h5>
              <h2 className="bd-section-title mb-25">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-skill--content">
              {items.map((item) => {
                const { label, percentage } = item;
                const value = `${percentage}%`;

                return (
                  <div key={item.label} className="bd-skill__wrapper mb-25">
                    <div className="bd-skill--title__wrapper">
                      <h5 className="bd-skill--title">{label}</h5>
                      <span style={{ left: value }}>{value}</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: value }}
                      >
                        <span></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
