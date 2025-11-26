import Head from "next/head";
import Link from "next/link";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="keyword" content="test test1"></meta>
      </Head>
      <div>
        <div className="nav">
          <Link href="/home">Home</Link>
        </div>
        <h1>Здарова</h1>
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
