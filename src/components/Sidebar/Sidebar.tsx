import React from "react";
import NextImage from "next/image";
import {
  IoCalendarOutline,
  IoChevronDown,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoTwitter,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <NextImage
            src="/pics/me.png"
            width={80}
            height={80}
            alt="Jayant Malik"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Jayant malik">
            Jayant Malik
          </h1>
          <p className="title">Software Engineer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:work.jayantmalik@gmail.com"
                className="contact-link"
              >
                work.jayantmalik@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917015108956" className="contact-link">
                +91 (701) 510-8956
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">July 28, 2002</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Chandigarh, India</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <IoLogoFacebook />
            </a>
          </li>
          <li className="social-item">
            <a href="https://twitter.com/BharatDevelop" className="social-link">
              <IoLogoTwitter />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/workjayantmalik"
              className="social-link"
            >
              <IoLogoGithub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
