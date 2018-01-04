import React,{Component} from "react"
import {render} from "react-dom"
import {Header} from "./../../components/public"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
import "./index.css"
import {Link} from "react-router"

class HomePage extends Component {
  state = {
    focus: [],
    imgHeight: 176,
    icon: [],
    registerGift: [],
    discoveryTheme: [],
    pic: [],
    sesameCredit: [],
    list: []
  }
  componentDidMount() {
    fetch(`http://localhost:8080/api/homePage`).then(res=>res.json()).then(data=>{
      this.setState({
        focus: data.banner,
        icon: data.icon,
        registerGift:data.registerGift,
        discoveryTheme: data.discoveryTheme,
        pic: data.pic,
        sesameCredit: data.sesameCredit,
        list: data.list
      })
    })
    
  }
  render() {
    const {icon,registerGift,pic,sesameCredit,list} = this.state
    console.log(sesameCredit)
    return (
      <div className="pageHome">
        <Header />
        <div className="slider">
          <Carousel
            autoplay={true}
            infinite
            selectedIndex={1}
          >
            {this.state.focus.map(ii => (
              <a
                key={ii}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={ii.imgUrl}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
          <Link to="/source">
            <div className="search">
              <i className="iconfont icon-sousuokuang icon-search"></i>
              <span>您想住哪儿？</span>
            </div>
          </Link>
          
        </div>
        <ul className="iconImg">
          {
            this.state.icon.map((icon,index)=>{
              return <li key={index}>
                        <span>
                          <img src={icon.imgUrl} alt=""/>
                        </span>
                        <a href="javascript:;">{icon.txt}</a>
                   </li>
             })
          }
         </ul> 
         <div className="register-gift">
           {
             this.state.registerGift.map((ele,index)=>{
               return <div key={index}>
                 <div className="reg-img">
                   <img src={ele.imgUrl} alt=""/>
                 </div>
                 <div className="reg-text">{ele.txt}</div>
               </div>
             })
           }
         </div>
         <div>
           <Carousel
            selectedIndex={1}
            autoplay={true}
            infinite
          >
            {this.state.discoveryTheme.map(ii => (
              <a
                key={ii}
                href="javascript:;"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={ii.imgUrl}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
         </div>
         <div className="pic-title">发现公寓</div>
         <div className="pic">
           {
             this.state.pic.map((ele,index)=>{
               return <div key={index}>
                 <div className="pic-img">
                   <img src={ele.imgUrl} alt=""/>
                   <div className="iconfont icon-xin ix"></div>
                   <p>
                     <span>{ele.Housewear}</span>
                     <span>{ele.score}</span>
                     <span>{ele.comment}</span>
                     <span>{ele.live}</span>
                   </p>
                 </div>
                 <h3>{ele.txt}
                   <div>&yen;
                     <em>{ele.price}</em>
                   </div>
                 </h3>
                 <div className="icon-tags">
                     {
                        ele.iconTags.map((ele,index)=>{
                          return <span key={index} className={ele.class}>{ele.preferred}</span>
                        })
                      }
                </div>
              </div>
             })
             
           }
         </div>
         <div className="sesameCredit">
            {
              this.state.sesameCredit.map((ele,index)=>{
                return <img src={ele.imgUrl} alt="" key="index"/>
              })
            }
        </div>
        <div className="title-beijing">
          <p>北京的游客</p>
          <p>最喜欢去的目的地</p>
        </div>
        <div className="list">
          {
            this.state.list.map((ele,index)=>{
              return <div key={index} className="list-content">
                <img src={ele.imgUrl} alt=""/>
                <div className="list-place">
                  <p>{ele.place}</p>
                  <p>{ele.pinyin}</p>
                </div>
              </div>
            })
          }
        </div>
        <div className="footer">
          <ul>
            <li>
              <a href="javascript:;">关于途家</a>
            </li>
            <li>
              <a href="javascript:;">客服热线</a>
            </li>
            <li>
              <a href="javascript:;">电脑版</a>
            </li>
          </ul>
          <p>©2018 途家网 京ICP证120277号</p>
        </div>
        
      </div>
     
      
    )
  }
}



export {HomePage}