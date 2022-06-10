import Header from "../Layout/Header";
import Login from "../Login/Login";
import Footer from "../Layout/Footer";

export default function Home({ setRefreshCheckLogin }) {
  return (
    <>
      <Header />
      <Login setRefreshCheckLogin={setRefreshCheckLogin} />
      <Footer />
    </>
  );
}
