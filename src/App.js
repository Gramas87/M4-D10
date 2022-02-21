import logo from './logo.svg';
import './App.css';
import MusicPlayer from './components/MusicPlayer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./homepage.css"
import MyNavbar from './components/MyNavbar'
import HomePage from './components/HomePage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AlbumPage from './components/AlbumPage'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <MyNavbar />
     
    <Routes> 
       
     
     <Route path="/" element={<HomePage />} />
     </Routes>
      <MusicPlayer />
      </BrowserRouter>
    </div>
  );
}

export default App;
