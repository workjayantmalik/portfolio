import React from "react";
import NextLink from "next/link";
import { Routes } from "~constants/Routes";
import clsx from "clsx";
import { useRouter } from "next/router";

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = () => {
  const router = useRouter();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NextLink href={Routes.about}>
            <a
              className={clsx(
                "navbar-link",
                router.pathname === Routes.about ? "active" : null
              )}
            >
              About
            </a>
          </NextLink>
        </li>
        <li className="navbar-item">
          <NextLink href={Routes.certifications}>
            <a
              className={clsx(
                "navbar-link",
                router.pathname === Routes.certifications ? "active" : null
              )}
            >
              Certifications
            </a>
          </NextLink>
        </li>
        <li className="navbar-item">
          <NextLink href={Routes.skills}>
            <a
              className={clsx(
                "navbar-link",
                router.pathname === Routes.skills ? "active" : null
              )}
            >
              Skills
            </a>
          </NextLink>
        </li>

        <li className="navbar-item">
          <NextLink href={Routes.portfolio}>
            <a
              className={clsx(
                "navbar-link",
                router.pathname === Routes.portfolio ? "active" : null
              )}
            >
              Portfolio
            </a>
          </NextLink>
        </li>
        <li className="navbar-item">
          <NextLink href={Routes.contact}>
            <a
              className={clsx(
                "navbar-link",
                router.pathname === Routes.contact ? "active" : null
              )}
            >
              Contact
            </a>
          </NextLink>
        </li>
      </ul>
    </nav>
  );
};
