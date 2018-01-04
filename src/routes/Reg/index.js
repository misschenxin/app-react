import React,{Component} from "react";
import {Link} from "react-router"
import "./index.css"
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


class Reg extends Component {
    //https://api.growingio.com/v2/1fa38dc3b3e047ffa08b14193945e261/web/action?stm=1515048543889
    //https://passport.tujia.com/H5Site/SendRegisterVerCode/?mobile=15130264282&enableRegisterValidateAudio=false&imageCode=jyjs&timestamp=1515048800867
    state={
        stm:1515048543889,
        mobile:"",
        enableRegisterValidateAudio:false,
        imageCode:"",
        timestamp:1515048800867
    }
    render(){
        function showToast() {
            fetch(`https://passport.tujia.com/H5Site/SendRegisterVerCode/?mobile=${this.state.mobel}enableRegisterValidateAudio=false&imageCode=jyjs&timestamp=1515048800867`)
        Toast.info('输入有误', 1);
        }
        return <div id="Reg-page">
            <div>
                <img src="https://staticfile.tujia.com/Mobile/Images/logo/tujia_logo_w1.png" alt="途家" width="135" height="32"/>
            </div>
            
               <ul className='Reg-input'>
                   <li>
                       <input type="text" placeholder="手机号"/>
                       <i><em className="iconfont icon-iconfontdianhua"></em>获取短信验证码</i>
                   </li>
                   <li>
                       <em className="iconfont icon-iconfontdianhua"></em>
                        <input type="text" placeholder="4位短信验证码"/>
                   </li>
                   <li>
                       <em className="iconfont icon-suo"></em>
                        <input type="text" placeholder="设置密码 6-16位字母、数字"/>
                        <em className="iconfont icon-yincang"></em>
                   </li>
                   <li>
                       <em className="iconfont icon-zuanshi"></em>
                        <input type="text" placeholder="设置密码 6-16位字母、数字"/>
                        <em className="iconfont icon-i"></em>
                   </li>
               </ul>
            
            
               <WingBlank>
                <WhiteSpace />
                <Button onClick={showToast}>注册并登录</Button>
                <WhiteSpace />
            </WingBlank>
            <div className="Reg-start">
                点击注册，即表示您已同意
                <a href="">《途家网服务协议》</a>
            </div>
            <div className="Reg-end">
                <Link to="/reg">已有账号直接登录</Link>
            </div>
            <p className="tit">垃圾</p>
        </div>
    }
}

export default Reg