import Ballpit from "./components/ballPit";
import "./index.css";
import im1 from "./assets/images/img1.jpeg";
import im2 from "./assets/images/img2.jpeg";
import im3 from "./assets/images/img3.jpeg";
import im4 from "./assets/images/img4.jpeg";
import im5 from "./assets/images/img5.jpeg";
import im6 from "./assets/images/img6.jpeg";
import im7 from "./assets/images/img7.jpeg";
import im8 from "./assets/images/img8.jpeg";
import im9 from "./assets/images/img9.jpeg";
import im10 from "./assets/images/img10.jpeg";
import im11 from "./assets/images/img11.jpeg";

import CircularGallery from "./components/Circularimg";


const galleryItems = [
  {
    image: im1,
    text: "Image 1"
  },
  {
    image: im2,
    text: "Image 2"
  },
  {
    image: im3,
    text: "Image 3"
  },
  {
    image: im4,
    text: "Image 4"
  },
  {
    image: im5,
    text: "Image 5"
  },
  {
    image: im6,
    text: "Image 6"
  },
  {
    image: im7,
    text: "Image 7"
  },
  {
    image: im8,
    text: "Image 8"
  },
  {
    image: im9,
    text: "Image 9"
  },
  {
    image: im10,
    text: "Image 10"
  },
  {
    image: im11,
    text: "Image 11"
  }
];



function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Ballpit  />


      <div className="content">
  {/* Invitation Text */}
  <div className="invitation">
  <h2>🎉 Join us to celebrate 🎉</h2>

  <h1>EZAN'S FIRST BIRTHDAY</h1>

  <p>💜 A day filled with love, laughter & memories 💜</p>

  <div className="date-card">
    <span>📅 July 15th</span>
    <span>🕠 5:30 PM</span>
  </div>
</div>

      <div className="gallery-container">
    <CircularGallery
      items={galleryItems}
      bend={3}
      textColor="#fff"
      borderRadius={0.08}
    />
  </div>
      </div>
          
    </div>
  );
}

export default App;