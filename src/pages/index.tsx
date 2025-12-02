import Head from "next/head";
import style from "../styles/index.module.css";
import { Layout } from "../components/layout/Layout";
import { Header } from "../components/header/Header";

const Index = ({ products }: any) => {
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
        <Header />
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
