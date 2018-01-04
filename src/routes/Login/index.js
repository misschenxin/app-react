import React,{Component} from "react";
import "./index.css"
import {Link} from "react-router"
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


class Login extends Component {
    state={
        flag:true   
    }
    change1(){
          this.setState({
              flag:true
          })      
    }
     change2(){
          this.setState({
              flag:false
          })      
    }
    render(){
       
        
        function showToast() {
        Toast.info('输入有误', 1);
        }
        return <div id="Login-page">
            <div>
                <img src="https://staticfile.tujia.com/Mobile/Images/logo/tujia_logo_w1.png" alt="途家" width="135" height="32"/>
            </div>
            <div className="Login-cut">
                <div>
                     <p className={this.state.flag?"Login-current":""} onClick={this.change1.bind(this)} >手机验证码登录</p>
                    <span></span>
                    <p className={this.state.flag?"":"Login-current"} onClick={this.change2.bind(this)} >普通方式登录</p>
                </div>
               <ul className='Login-input' id={this.state.flag?"Login-show":""}>
                   <li>
                       <input type="text" placeholder="手机号"/>
                       <i>获取短信验证码</i>
                   </li>
                   <li>
                        <input type="text" placeholder="短信验证码"/>
                   </li>
               </ul>
               <ul className='Login-input' id={this.state.flag?"":"Login-show"}>
                   <li>
                       <input type="text" placeholder="手机号/邮箱/用户名"/>
                      
                   </li>
                   <li>
                        <input type="text" placeholder="登录密码"/>
                         <i>忘记密码？</i>
                   </li>
               </ul>
            </div>
            
               <WingBlank>
                <WhiteSpace />
                <Button onClick={showToast}>登录</Button>
                <WhiteSpace />
            </WingBlank>
            
            <div>
                <Link to="/reg">新用户注册</Link>
            </div>
        </div>
    }
}

export default Login