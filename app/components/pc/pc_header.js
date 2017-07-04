import React from "react";
import {Row, Col, Menu, Icon, Button,Modal,Input,Form,Tabs,message} from 'antd';
import Logo from '../../static/images/iwennews.png';
import '../../static/css/header.less';
import {post} from '../../Fun/post.js';
import {getData} from '../../Fun/get.js'
import {Link} from 'react-router';
import HeaderConfig from '../config/config.js';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      isLogin: false,
      userName: 'unknow',
      ModalVisible:false,
      action:'login'
    }
  }
  componentWillMount(){
    let username = localStorage.getItem('username');
    if(username){
      this.setState({
        userName:username,
        isLogin:true
      })
    }
  }
  handleClick(e) {
    if(e.key=='regesiter'){
      this.setState({
        ModalVisible:true
      })
    }
    this.setState({current: e.key})
  }
  loginOut() {
    this.setState({isLogin: false})
    localStorage.clear();
  }
  setModalVisible(flag){
    this.setState({
      ModalVisible:flag
    })
  }
  callback(key){
    let arr = ["login","regesiter"];
    let index = key-1;
    this.setState({
      action:arr[index]
    })
  }
  handleSubmit(e){
    e.preventDefault();
    var formData = this.props.form.getFieldsValue();
    let action = this.state.action;
    console.log(formData.username+'===='+formData.password);
    if(action=='login'){
      let result = getData(`http://localhost:3000/login/?username=${formData.username}&password=${formData.password}`);
      /*let result = post('http://localhost:3000/login',{
        username:formData.username,
        password:formData.password
      })*/
      result.then(res=>res.json())
      .then(json=>{
        console.log(json)
        this.setState({
          isLogin:true,
          userName:json.username,
          ModalVisible:false
        })
        localStorage.setItem('username',json.username);
      })
    }else if(action=='regesiter'){
      let result = getData(`http://localhost:3000/regesiter/?username=${formData.r_username}&password=${formData.r_password}`);
      /*let result = post('http://localhost:3000/regesiter',{
        r_username:formData.r_username,
        r_password:formData.r_password
      })*/
      result.then(res=>res.json())
      .then(json=>{
        message.success(json.msg);
        this.setState({
          isLogin:true,
          userName:formData.r_username,
          ModalVisible:false
        })
      })
    }
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    let menulist = HeaderConfig.menulist;
    let showMenu = this.state.isLogin
      ? <Menu.Item key='loginIn' className="header-login">
          <Button type="primary">{this.state.userName}</Button>
          <Button type="dashed"><Link to={`/center`}>个人中心</Link></Button>
          <Button
            type="ghost"
            onClick={this.loginOut.bind(this)}>退出</Button>
        </Menu.Item>
      : <Menu.Item key='regesiter' className="header-login" >
        登录|注册
      </Menu.Item>
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Row>
              <Col span={1}>
                <div className="logo">
                  <Link to={`/`}>
                    <img src={Logo} alt="logo"/>
                  </Link>
                </div>
              </Col>
              <Col span={22}>
                <Menu
                  onClick={this
                  .handleClick
                  .bind(this)}
                  selectedKeys={[this.state.current]}
                  mode="horizontal">
                  {
                    menulist.map((item)=>{
                      return(
                        <Menu.Item key={item.key}>
                          <Link to={item.url}>
                            <Icon type={item.icon}/>
                            {item.title}
                          </Link>
                        </Menu.Item>
                      )
                    })
                  }
                  {showMenu}
                </Menu>
                <Modal visible={this.state.ModalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText='关闭'>
                  <Tabs  defaultActiveKey="1" onChange={this.callback.bind(this)}>
                    <TabPane tab="登录" key="1">
                      <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label="用户名">
                          {
                            getFieldDecorator('username',{
                              rules:[
                                {required:true,message:'Please input your username!'}
                              ]
                            })(<Input placeholder="请输入用户名"/>)
                          }
                        </FormItem>
                        <FormItem label="密码">
                          {
                            getFieldDecorator('password',{
                              rules:[
                                {required:true,message:'Please input your password!'}
                              ]
                            })(<Input placeholder="请输入密码" type="password" />)
                          }
                        </FormItem>
                        <Button type="primary" size="large" htmlType="submit">登录</Button>
                      </Form>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                      <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label="用户名">
                           {
                            getFieldDecorator('r_username',{
                              rules:[
                                {required:true,message:'Please input your password!'}
                              ]
                            })(<Input placeholder="请输入用户名" />)
                          }
                        </FormItem>
                        <FormItem label="密码">
                            {
                            getFieldDecorator('r_password',{
                              rules:[
                                {required:true,message:'Please input your password!'}
                              ]
                            })(<Input placeholder="请输入密码" type="password" />)
                          }
                        </FormItem>
                        <FormItem label="确认密码">
                            {
                            getFieldDecorator('confirmPassword',{
                              rules:[
                                {required:true,message:'Please input your password again!'}
                              ]
                            })(<Input placeholder="请再次输入密码" type="password" />)
                          }
                        </FormItem>
                        <Button type="primary" size="large" htmlType="submit">注册</Button>
                      </Form>
                    </TabPane>
                  </Tabs>
                </Modal>
              </Col>
              <Col span={1}></Col>
            </Row>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default PCHeader = Form.create({})(PCHeader);