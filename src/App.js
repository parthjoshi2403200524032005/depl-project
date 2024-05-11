import "./App.css";
import TextImages from "./Components/Body/ImagesWithText/text-image.jsx";
import Slider from "./Components/Body/Slider/Slider_images.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <TextImages/>
    </>
  );
}

export default App;
