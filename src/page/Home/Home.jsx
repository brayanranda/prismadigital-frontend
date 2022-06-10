import HomeComponent from "../../components/Home/Home";

export default function Home({ setRefreshCheckLogin }) {
  return (
    <>
      <HomeComponent setRefreshCheckLogin={setRefreshCheckLogin} />
    </>
  );
}
