import Head from "next/head";
import React, { useEffect, useRef } from "react";
import A from "../components/link/A";
import style from "../styles/index.module.css";
import { Layout } from "../components/layout/Layout";

const Index: React.FC = ({ products }: any) => {
  const navRef = useRef(null);
  useEffect(() => {
    let lastScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (navRef.current === null) return;

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition >= 10
      ) {
        navRef.current.classList.add(style.nactive);
      } else if (currentScrollPosition < 10) {
        navRef.current.classList.remove(style.nactive);
      }

      lastScrollPosition =
        currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="keyword" content="test test1"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <nav ref={navRef} className={style.navigate}>
          <A link="/home" title="Home" />
          <div className={style.search}>
            <input className={style.searchInput} placeholder="Search..." />
          </div>
        </nav>
        <h1 className={style.title}>Hello</h1>
        <Layout products={products} />
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();

  return {
    props: { products: result.products },
  };
}
