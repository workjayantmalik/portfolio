import "../css/main.css";
import "../css/custom.css";

import type { AppProps } from "next/app";
import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar/Navbar";

function RootApplication({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default RootApplication;
