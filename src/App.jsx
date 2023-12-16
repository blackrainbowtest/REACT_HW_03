import "./App.css";
import Routes from "./Routes/Routes";
import Footer from "./components/common/Layout/Footer/Footer";
import Header from "./components/common/Layout/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}
