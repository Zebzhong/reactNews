import React,{Component} from 'react';
import Logo from '../../static/images/iwennews.png';
import {Icon} from 'antd';

export default class MobileHeader extends Component{
  render(){
    return (
      <div className="header">
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        <span>新闻</span>
        <div className="login">
          <a href="javascript:;"><Icon type="user" /></a>
        </div>
      </div>
    )
  }
}