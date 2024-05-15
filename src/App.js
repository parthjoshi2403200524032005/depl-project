import "./App.css";
import CardsImages from "./Components/Body/ImagesWithCard/card-image.jsx";
import Slider from "./Components/Body/Slider/Slider_images.jsx";
import { Text } from "./Components/Body/TextDesign/Text.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <CardsImages/>
      <Text />
    </>
  );
}

export default App;
