import MovieList from './MovieList';
import { Header } from './Header';
import { movies } from './movies';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Trailer } from './pages/Trailer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <MovieList list ={movies}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/trailer/:id' element={<Trailer/>} />
      </Routes>
    </div>
  );
}

export default App;