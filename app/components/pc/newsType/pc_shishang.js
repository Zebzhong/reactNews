import React,{Component} from  'react';
import { Row, Col} from 'antd';
import Listnews from '../publicComponents/listnews.js';
import SiderBar from '../publicComponents/siderbar.js';

export default class PCShishang extends Component{
  render(){
    return(
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <div className="container">
            <div className="main">
              <Listnews url='http://www.iwen.wiki/sxtstu/news/juhenews.php?type=shishang&count=8' type='shishng' />
            </div>
            <SiderBar url='http://www.iwen.wiki/sxtstu/news/juhenews.php?type=shishang&count=20'/>
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}