import { useEffect, useRef } from "react";
import style from "./CardProducts.module.css";

export const CardProducts = ({ products }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (window.innerWidth > 1000 && cardRef.current) {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX = ((rect.height / 2 - y) * 0.04).toFixed(2);
      const rotateY = ((x - rect.width / 2) * 0.04).toFixed(2);

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    } else {
      return (cardRef.current.style.transform = "");
    }
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={style.container}
    >
      <img
        src={products.thumbnail}
        alt="Изображение продукта"
        className={style.imgProduct}
      />
      <h2 className={style.title}>{products.title}</h2>
      {!products.discountPercentage ? (
        <p className={style.price}>{products.price}$</p>
      ) : (
        <div className={style.priseDiscountContainer}>
          <p className={style.price}>{products.price}$</p>
          <p className={style.priceDiscount}>{products.discountPercentage}%</p>
        </div>
      )}

      <button className={style.button}>About</button>
    </div>
  );
};
