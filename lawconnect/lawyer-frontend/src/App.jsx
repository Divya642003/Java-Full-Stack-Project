
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import ListClient from './components/ListClient';
import ListLawyers from './components/ListLawyers';
import AddLawyer from './components/AddLawyer';
import ViewLawyer from './components/ViewLawyer';
import AddClient from './components/AddClient';
import ViewClient from './components/ViewClient';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
 

  return (
    <>
    <BrowserRouter>
       <Header/>
       <Routes>
        {/* // http://localhost:3000/lawyer */}
           <Route path='/lawyer' element = { <ListLawyers/>}></Route>

         {/* // http://localhost:3000/client */}
         <Route path='/client' element = { <ListClient/>}></Route> 

          {/* // http://localhost:3000/add-lawyer   */}
         <Route path='/add-lawyer' element = { <AddLawyer/>}></Route>

         {/* // http://localhost:3000/edit-lawyer/1   */}
         <Route path='/edit-lawyer/:id'element = {<AddLawyer/>}></Route>
        
           {/* http://localhost:3000/view-lawyer/1   */}
          <Route path='/view-lawyer/:id' element = { <ViewLawyer/>}></Route> 

            {/* // http://localhost:3000/add-client   */}
         <Route path='/add-client' element = { <AddClient/>}></Route>

            {/* // http://localhost:3000/edit-client/1   */}
         <Route path='/edit-client/:id' element = {<AddClient/>}></Route>

            {/* http://localhost:3000/view-client/1   */}
         <Route path='/view-client/:id' element = { <ViewClient/>}></Route> 
       </Routes>
       
       <Footer/>
     </BrowserRouter>
     </>
  )
}

export default App
