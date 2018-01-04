import React,{Component} from "react"
import {render} from "react-dom"
import {Router,Route,hashHistory} from "react-router"
import {HomePage} from "./routes/Home"
import {Source} from "./routes/Source"
import "./components/public/reset.css"
import {Provider} from "react-redux"
import store from "./store"
import Login from "./routes/Login"
import Reg from "./routes/Reg"
import Order from "./routes/Order"

const App = ()=>{
  return <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={HomePage}></Route>
      <Route path="/source" component={Source}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/reg" component={Reg}></Route>
      <Route path="/order" component={Order}></Route>
    </Router>
  </Provider>
}

render(<App /> ,document.getElementById("root"))