import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import useLocalStorage from './components/localstore';
import Editor from './components/editor';
function App() {

  const [htmlCode, setHtmlCode] = useLocalStorage('html', '', true);
  const [cssCode, setCssCode] = useLocalStorage('css', '', false);
  const [jsCode, setJSCode] = useLocalStorage('js', '', true);
  const [srcDoc, setSrcDoc] = useState('');
  useEffect(() => {

    const timeout = setTimeout(() => {
      const src = `<html><style>${cssCode}</style><body>${htmlCode}</body><script>${jsCode}</script><html>`;
      setSrcDoc(src);
    }, 1000)
    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode])


  return (<>
    <NavBar />
    <div className="row mx-0">
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <Editor
          langauge='xml'
          displayName='Html'
          value={htmlCode}
          onChange={setHtmlCode} />
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <Editor
          langauge='css'
          displayName='CSS'
          value={cssCode}
          onChange={setCssCode} />
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <Editor
          langauge='javascript'
          displayName='JS'
          value={jsCode}
          onChange={setJSCode} />
      </div>
      <div className="col-sm-12 col-lg-12 col-md-12 iframe-container" >
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='1'
          width='100%'
          height='100%'
        >

        </iframe>
      </div>
    </div>


  </>
  );
}

export default App;

function NavBar(props) {


  let element = <nav className="navbar navbar-dark bg-dark">

    <a className="navbar-brand" href="/">Jerry's CodePen</a>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-primary my-2 my-sm-0 mx-2" type="submit">
        <span className='glyphicon glyphicon-cloud display-inline-block' ></span>Save</button>
      <button className="btn btn-success my-2 my-sm-0 mx-2" type="submit">Settings</button>
      <button className="btn btn-success my-2 my-sm-0 mx-2" type="submit">Change View</button>
    </form>
  </nav>
  return element;
}

