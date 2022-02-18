import logo from './logo.svg';
import './App.css';
import MusicPlayer from './components/MusicPlayer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./homepage.css"
import MyNavbar from './components/MyNavbar'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <MyNavbar />
     <HomePage />
      <MusicPlayer />
    </div>
  );
}

export default App;
