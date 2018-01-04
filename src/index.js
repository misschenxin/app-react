import React,{Component} from "react"
import {render} from "react-dom"
import {Router,Route,hashHistory} from "react-router"
import {HomePage} from "./routes/Home"
import {Source} from "./routes/Source"
import "./components/public/reset.css"

const App = ()=>{
  
  return <Router history={hashHistory}>
      <Route path="/" component={HomePage}></Route>
      <Route path="/source" component={Source}></Route>
    </Router>
 
}

render(<App /> ,document.getElementById("root"))