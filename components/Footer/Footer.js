import styles from "./Footer.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      
    </div>
  );
}