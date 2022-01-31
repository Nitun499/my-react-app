import React from 'react';
import { useState } from 'react/cjs/react.development';
import NavBar from '../Components/NavBar'
import TextForm from '../Components/TextForm';
import Alert from './Alert';
// import About from '../Components/About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// }from "react-router-dom";
function App() {
    const [mode,setMode]=useState('light')
    const [alert,setAlert]=useState(null)
    const showAlert =(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
            setAlert(null);
        },1000)
    }
    const toggleMode=()=>{
        if(mode==='dark'){
            setMode('light');
            document.body.style.backgroundColor="white";
            showAlert("Light mode is enabled!","success")
        }else{
            setMode('dark');
            document.body.style.backgroundColor="#06061a";
            showAlert("Dark mode is enabled!","success")
        }
    }
    return <>
    {/* <Router> */}
        <NavBar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-4">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm heading="Enter your text to analyze"showAlert={showAlert} mode={mode}/>
          </div>
          {/* </Route>
        </Switch> */}
        
    {/* </Router> */}
    </>
}

export default App;

