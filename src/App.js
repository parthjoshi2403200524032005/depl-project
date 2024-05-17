import "./App.css";
import TextBox from "./Components/Body/ImagesWithCard/Text-Box.jsx";

import CardsImages from "./Components/Body/ImagesWithCard/card-image.jsx";
import Slider from "./Components/Body/Slider/Slider_images.jsx";
import { Text } from "./Components/Body/TextDesign/Text.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <CardsImages />
      <Text />
      <TextBox />
    </>
  );
}

export default App;
