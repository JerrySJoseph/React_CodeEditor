import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {FiCodepen} from 'react-icons/fi'
import {BiMenuAltLeft} from 'react-icons/bi'
function App() {

  
  return (<>
    <NavBar />    
      <div className="row mx-0">
       <div className='col-sm-12 col-md-4 col-lg-4'>
          HTML
       </div>
       <div className='col-sm-12 col-md-4 col-lg-4'>
         CSS
       </div>
       <div className='col-sm-12 col-md-4 col-lg-4'>
         JAVASCRIPT
       </div>
      </div>
    
    </>
  );
}

export default App;

function NavBar() {
  let element = <nav className="navbar navbar-dark bg-dark">
     
    <a className="navbar-brand" href="/">Jerry's CodePen</a>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-primary my-2 my-sm-0 mx-2" type="submit">
        <span className='glyphicon glyphicon-cloud display-inline-block'></span>Save</button>
      <button className="btn btn-success my-2 my-sm-0 mx-2" type="submit">Settings</button>
      <button className="btn btn-success my-2 my-sm-0 mx-2" type="submit">Change View</button>
    </form>
  </nav>
  return element;
}

