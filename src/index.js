import React,{Component} from "react"
import {render} from "react-dom"
import {Router,Route,hashHistory} from "react-router"
import {Home} from "./routes/Home"
import "./components/public/reset.css"

const App = ()=>{
  
  return <Router history={hashHistory}>
    
      <Route path="/" component={Home}></Route>
    </Router>
 
}

render(<App /> ,document.getElementById("root"))