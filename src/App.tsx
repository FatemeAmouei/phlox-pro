import Articles from "./Articles/Articles";
import Elementors from "./Elementors/Elementors";
import Header from "./Header/Header/Header";
import Navbar from "./Header/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Elementors />
      <Articles />
    </>
  );
}

export default App;
