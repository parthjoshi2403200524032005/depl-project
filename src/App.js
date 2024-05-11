import "./App.css";
import CardsImages from "./Components/Body/ImagesWithCard/card-image.jsx";
import Slider from "./Components/Body/Slider/Slider_images.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <CardsImages/>
    </>
  );
}

export default App;
