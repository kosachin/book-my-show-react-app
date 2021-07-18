import { Route } from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// pages
import HomePage from "./pages/Home.page"
import MoviePage from "./pages/Movie.page"

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <DefaultHOC path="/movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
