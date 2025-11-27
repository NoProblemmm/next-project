import React from "react";
import { CardProducts } from "../ui/cardProducts/CardProducts";
import style from "./Layout.module.css";

interface LayoutProps {
  products?: any[];
}

export const Layout: React.FC<LayoutProps> = ({ products }) => {
  return (
    <>
      {!products || !Array.isArray(products) ? (
        <div>...Loading</div>
      ) : (
        <div className={style.container}>
          {products.map((product) => (
            <CardProducts products={product} />
          ))}
        </div>
      )}
    </>
  );
};
