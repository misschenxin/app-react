import React,{Component} from "react"
import {render} from "react-dom"
import {Header} from "./../../components/public"
import {Carousel} from 'antd'
import "./index.css"



/*class Slide extends Component {
  render(){
    return (
      <Carousel effect="fade" autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
     </Carousel>
    )
  }
}*/

class Home extends Component {
  render(){
    return (
      <div>
        <Header />
       
      </div>
      
    )
  }
}
export {Home}