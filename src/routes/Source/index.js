import React,{Component} from "react"
import "./source.css"

class Source extends Component {
  state = {
    status1: "block",
    status2: "none",
    color1: "#f60",
    color2: "#000",
    inlandCity: ["北京","三亚","秦皇岛","上海","广州","成都","青岛","南京"],
    allCity: ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"]
  }
  tabCity(){
    if(this.state.status1=="none"){
      this.setState({
        status1: "block",
        status2: "none",
        color1: "#f60",
        color2: "#000"
      })
    }
  }
  changeCity(){
    if(this.state.status2=="none"){
      this.setState({
        status2: "block",
        status1: "none",
        color1: "#000",
        color2: "#f60"
      })
    }
  }
  stairs(index){
    var Letter = document.getElementsByClassName("letter")[index]
    document.documentElement.scrollTop = Letter.offsetTop - 40
    // document.documentElement.scrollTop
  }
  render(){
    const {inlandCity,allCity} = this.state
    return (
      <div className="source">
        <div className="source-header">
          <div className="back">
            <i className="iconfont icon-xiangzuojiantou"></i>
            <a href="javascript:window.history.go(-1);">途家</a>
          </div>
          <div className="sourceIuput">
            <i className="iconfont icon-sousuokuang"></i>
            <input type="text" placeholder="搜索"/>
          </div>
          <div className="source">搜索</div>
        </div>
        <div className="location-content">
          <h2 className="location">
            <i className="iconfont icon-iconfontdaohang navigation"></i>
            <span>看看我附近的公寓/民宿</span>
            <i className="iconfont icon-arrowright rightArrow"></i>
          </h2>
        </div>
        <div className="tab-city">
          <span className="inland" onClick={this.tabCity.bind(this)} style={{color:this.state.color1}}>国内城市</span>
          <span className="oversea" onClick={this.changeCity.bind(this)} style={{color:this.state.color2}}>海外•港台</span>
        </div>
        <div style={{display:this.state.status1}} className="inlandCity">
          <ul className="classify-city">
            {
              inlandCity.map((ele,index)=>{
                return <li key={index}>{ele}</li>
              })
            }
          </ul>
          <h2 className="all-city">全部城市</h2>
          <ul className="city-header">
            {
              allCity.map((ele,index)=>{
                return <li key={index} onClick={()=>this.stairs(index)}>{ele}</li>
              })
            }
          </ul>
          {
              allCity.map((ele,index)=>{
                return (
                  <div key={index} className="sort-city">
                    <h2 className="letter">{ele}</h2>
                    <ul>
                      {
                        inlandCity.map((item,i)=>{
                          return <li key={i}>{item}</li>
                        })
                      }
                    </ul>
                  </div>
                )
              })
          }
        </div>
        <div style={{display:this.state.status2}}>2</div>
      </div>
    )
  }
}



export {Source}