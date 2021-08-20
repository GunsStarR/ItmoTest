import styles from "./NewsItem.module.scss";
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";

export default function NewsItem({ data }) {
  const { t } = useTranslation();

  const handleClick = () => location.replace(data.url);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = t("common:months." + date.getMonth());
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    data === undefined ?
      <div className={`${styles["news-item"]} ${styles["news-item_empty"]}`}></div>
      :
      <div className={styles["news-item"]} onClick={handleClick}>
        <div className={styles["news-item__inner"]}>
          <div className={styles["news-item__preview"]}>
            <Image src={data.image_big} layout="fill" objectFit="cover" />
            <div className={styles["news-item__category"]} style={{color: data.category.color}} >{data.category.category_title}</div>
          </div>
          <div className={styles["news-item__content"]}>
            <div className={styles["news-item__date"]}>{formatDate(data.date)}</div>
            <div className={styles["news-item__title"]}>{data.title}</div>
          </div>
        </div>
      </div>
  );
}