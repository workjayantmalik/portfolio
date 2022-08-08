import type { NextPage } from "next";
import { IoBookOutline } from "react-icons/io5";

const Certifications: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">Certifications</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Maharishi Dayanand University, Rohtak, HR
            </h4>
            <span>2018 — 2022</span>
            <p className="timeline-text">
              A learning journey that will never be forgotten, taught us skills
              to make computers work hard for us and made some good friends to
              spend time while computer calculates value of PI. And we really
              worked hard to wrap our head around data structures.
            </p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Founder &amp; CEO</h4>
            <span>2018 — Present</span>
            <p className="timeline-text">Develop Bharat</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Developer Intern</h4>
            <span>2021</span>
            <p className="timeline-text">IIT Kanpur</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Associate Software Engineer - RPA
            </h4>
            <span>2022 — Present</span>
            <p className="timeline-text">Centelli India LLP</p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Certifications;
