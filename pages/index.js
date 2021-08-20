import News from "../components/News/News";

export default function NewsPage({ newsData }) {
  return (
    <>
      <News data={newsData.news} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const languageId = locale === "ru" ? 1 : 2;

  const res = await fetch(`https://news.itmo.ru/api/news/list/?ver=2.0&per_page=9&language_id=${languageId}`);
  const newsData = await res.json()

  return {
    props: {
      newsData,
    },
  }
}

