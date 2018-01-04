import React,{Component} from "react"
import "./index.scss"

class Order extends Component {
    
    render(){
        const orderLink = ["返回首页","退出登录","刷新页面","我的收藏","关于途家","网站地图","下载APP","电脑版"]
        return <div className="order-page">
            <div className="order-header">
                <a href="">
                    <span></span>
                </a>
                <p>
                    <em>国内订单</em>
                    <b>海外·港台</b>
                </p>
                <i></i>
            </div>
            <div>{this.props.children}</div>
            <div className="order-phone">
                <ul>
                    <li>
                        客服热线<em>4001881234</em>
                    </li>
                    <li>
                        境外拨打<em>+86-10-80697258转2</em>
                    </li>
                </ul>
            </div>
            <div className="order-link">
                {
                    orderLink.map((ele,index)=>{
                        return <a key={index}>{ele}</a>
                    })
                }
            </div>
            <p className="order-footer">©2018 途家网 京公网安备11010502026059号 
                <span>京ICP证120277号</span>
            </p>
        </div>
    }
}
export default Order