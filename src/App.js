
import './App.css';
import { PhotoViewer } from "./components/PhotoViewer/PhotoViewer.jsx";
import { ThumbnailListViewer } from './components/ThumbnailList/ThumbnailList';
import { ThumbnailImage } from './components/ThumbnailImage/ThumbnailImage.jsx'

function App() {
  return (
    <div>
      <h1>Photo Viewer</h1>
      <PhotoViewer imageUrl = "https://i.picsum.photos/id/424/1000/800.jpg?hmac=P8S2OdVsSiU33axhh-vzUnjYWdK5F4z6w1NZHh7ncCc"/>
      <h2> Select a photo</h2>
      <ThumbnailListViewer imageUrl = "https://picsum.photos/v2/list" />
    </div>
  );
}

export default App;
