import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Motivation from "./components/Motivation/Motivation";
import ReadOrListen from "./components/ReadOrListen/ReadOrListen";
import Reviews from "./components/Reviews/Reviews";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Motivation />
      <Summary />
      <ReadOrListen />
      <Reviews />
      <Footer/>
    </div>
  );
}

export default App;
