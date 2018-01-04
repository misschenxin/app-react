import React,{Component} from "react"
import {render} from "react-dom"
import {Router,Route,hashHistory} from "react-router"
import {Provider} from "react-redux"
import store from "./store"


import {Home} from "./routes/Home"
import Login from "./routes/Login"
import Reg from "./routes/Reg"
import Order from "./routes/Order"
import "./components/public/reset.css"

const App = ()=>{
  return <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/reg" component={Reg}></Route>
      <Route path="/order" component={Order}></Route>
    </Router>
  </Provider>
}

render(<App /> ,document.getElementById("root"))