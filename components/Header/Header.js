import styles from "./Header.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Header() {
  const router = useRouter();
  const { t, lang } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles["header__content"]}>
        <div className={styles["header__logo"]}>
          <Image src={`/logo/${lang}.png`} layout="fill" objectFit="contain" objectPosition="left" />
        </div>
        <div className={styles["header__language-switcher"]}>
          <Link href={router.asPath} locale="ru">
            <span className={`${styles["header__language"]} ${lang === "ru" ? styles["header__language_active"] : ""}`}>
              <span className={styles["header__language-img"]}><Image src="/language/ru.svg" layout="fill" objectFit="cover" /></span>
              RU
            </span>
          </Link>
          <span> | </span>
          <Link href={router.asPath} locale="en">
            <span className={`${styles["header__language"]} ${lang === "en" ? styles["header__language_active"] : ""}`}>
              EN
              <span className={styles["header__language-img"]}><Image src="/language/en.svg" layout="fill" objectFit="cover" /></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}