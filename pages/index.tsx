import Head from "next/head";
import Link from "next/link";
import React from "react";
import A from "../components/link/A";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="keyword" content="test test1"></meta>
      </Head>
      <div>
        <div className="nav">
          <A link="/home" title="Home" />
        </div>
        <h1>Hello</h1>
        <style jsx>
          {`
            .nav {
              background: red;
              padding: 15px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Index;
