import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import Main from "./ui/Main";
import Navbar from "./ui/Navbar";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
