import { useState } from "react";
import { PhotoViewer } from "./components/PhotoViewer";
import { PhotoList } from "./components/PhotoList";
import "./App.css";

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(
    "https://picsum.photos/id/600/1600/900.jpg"
  );
  return (
    <div className="App">
      <h1> React Photoviewer</h1>
      <PhotoViewer selectedPhoto={selectedPhoto} />
      <h2>Select a photo</h2>
      <PhotoList
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
}

export default App;
