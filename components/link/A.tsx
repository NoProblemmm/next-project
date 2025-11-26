import Link from "next/link";
import style from "./A.module.css";
type TLink = {
  link: string;
  title?: string;
};
const A = ({ link, title }: TLink) => {
  return (
    <Link className={style.link} href={link}>
      <p className={style.title}>{title}</p>
    </Link>
  );
};
export default A;
