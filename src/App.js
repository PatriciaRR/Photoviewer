
import './App.css';
import { PhotoViewer } from "./components/PhotoViewer/PhotoViewer.jsx";
import { ThumbnailList } from "./components/ThumbnailList/ThumbnailList.jsx";
import { ThumbnailImage } from "./components/ThumbnailImage/ThumbnailImage.jsx"

function App() {
  return (
    <div>
      <h1 className='title'>React Photo Viewer</h1>
      <PhotoViewer imageUrl = "https://i.picsum.photos/id/397/600/400.jpg?hmac=t1QU8upMXHdW6Cp2SSXRTcv5WgYj981igInUDGfvokQ"/>
      <h2 className='heading'> Select a photo</h2>
      <ThumbnailList imageUrl = "https://picsum.photos/v2/list" />
    </div>
  );
}

export default App;
