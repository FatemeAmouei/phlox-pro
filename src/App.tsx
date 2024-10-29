import Swipers from "./Swipers/Swipers";
import Elementors from "./Elementors/Elementors";
import Header from "./Header/Header/Header";
import Navbar from "./Header/Navbar/Navbar";
import Articles from "./Articles/Articles";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Elementors />
      <Swipers />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
