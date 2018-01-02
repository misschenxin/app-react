import React,{Component} from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="rightTopBtn">登录</div>
      </div>
    )
  }
}

export {Header}