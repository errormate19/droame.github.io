
import './App.css';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';


import {BrowserRouter,Routes,Route} from 'react-router-dom';

import EditUser from './components/EditUser';

 // importing all dependencies and defining routes for them.
function App() {
  return (
  <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route path ='/' element={<AllUsers/>}/>
       <Route path ='/all' element={<AllUsers/>}/>
       <Route path ='/add' element={<AddUser/>}/>
       <Route path ='/edit/:id' element={<EditUser/>}/>
      
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
