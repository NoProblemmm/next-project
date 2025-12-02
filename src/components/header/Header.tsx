import { useEffect, useRef } from "react";
import A from "../link/A";
import style from "./Header.module.css";

export const Header = () => {
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
        currentScrollPosition >= 1
      ) {
        navRef.current.classList.add(style.nactive);
      } else if (currentScrollPosition < 1) {
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
      <nav ref={navRef} className={style.navigate}>
        <A link="/home" title="Home" />
        <div className={style.search}>
          <input className={style.searchInput} placeholder="Search..." />
        </div>
      </nav>
    </>
  );
};
