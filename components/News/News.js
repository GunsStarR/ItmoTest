import styles from "./News.module.scss";
import NewsItem from "../NewsItem/NewsItem";
import useTranslation from "next-translate/useTranslation";

export default function News({ data }) {
  const { t } = useTranslation();

  const generateSkeletons = () => {
    const skeletons = [];

    for (let i = 0; i < 9; i++)
      skeletons.push(<NewsItem key={i} />);

    return skeletons;
  };

  return (
    <div className={styles["news"]}>
      <div className={styles.news__title}>{t("common:news title")}</div>
      <div className={styles.news__content}>
        {data === undefined ?
          generateSkeletons()
          :
          data.map((newsItem, i) => <NewsItem key={i} data={newsItem} />)
        }
      </div>

    </div>
  );
}