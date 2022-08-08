import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I&apos;m Software Engineer and Tech Saavy from Chandigarh, India,
          working in web development, android development, core development and
          DevOps. I enjoy turning complex problems into simple, beautiful and
          intuitive code.
        </p>
        <p>
          My job is to build your product so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </section>
      {/*
    - service
  */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg
          "
                alt="design icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Web development icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="mobile app icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-photo.svg"
                alt="camera icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Home;
