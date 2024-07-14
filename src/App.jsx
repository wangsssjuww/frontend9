import './App.css'
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import LandingPage from './komponen/LandingPage';
import Landing from './Pages/Landing';
import State from './Pages/state';
import EvenHandling from './Pages/handling';
import UseEffect from './Pages/UseEffect';
import Animasi from './Pages/timer';
import FetchApi from './Pages/fetch';
import ReactContext from './Pages/reactcontext';
import GetMahasiswa from './komponen/admin/GetMahasiswa';
import CreateMahasiswa from './komponen/admin/CreateMahasiswa';



function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/state" Component={State}/>
        <Route path="/handling" Component={EvenHandling}/>
        <Route path="/effect" Component={UseEffect}/>
        <Route path="/seconds" Component={Animasi}/>
        <Route path="/fetch" Component={FetchApi}/>
        <Route path="/react" Component={ReactContext}/>
        <Route path="/mhss" Component={GetMahasiswa}/>
        <Route path="/insert" Component={CreateMahasiswa}/>
      </Routes>
    </>
  )
}

export default App