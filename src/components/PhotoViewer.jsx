import React, { useState } from "react";
import "./PhotoViewer.css";

function PhotoViewer({ selectedPhoto }) {
  return (
    <div>
      <img className="main-photo" src={selectedPhoto}></img>
    </div>
  );
}
// function Photoviewer(props) {
//   const [photo, setPhoto] = useState(
//     "https://picsum.photos/id/378/1600/900.jpg"
//   );

//   function changePhoto() {
//     setPhoto("https://picsum.photos/1600/900.jpg");
//   }

//   return (
//     <div>
//       <img onClick={changePhoto} src={photo} />
//     </div>
//   );
// }

export { PhotoViewer };
