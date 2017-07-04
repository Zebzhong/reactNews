import React, {Component} from 'react';
import {Carousel, Row, Col} from 'antd';
import {getData} from '../../../Fun/get.js';
import '../../../static/css/pc_top.less';
import Listnews from '../publicComponents/listnews.js';
import SiderBar from '../publicComponents/siderbar.js';

export default class PCTop extends Component {
  constructor() {
    super();
    this.state = {
      banner: []
    }
  }
  componentDidMount() {
    let result = getData('http://iwen.wiki/sxtstu/blueberrypai/getIndexBanner.php');
    result
      .then(res => res.json())
      .then(json => {
        let bannerArr = [];
        json.banner.map((item) => bannerArr.push(item.img));
        this.setState({banner: bannerArr})
      })
  }
  render() {
    let imgArr = this.state.banner;
    return (
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <div className="container">
            <div className="main">
              <div className="banner">
                {imgArr.length
                  ? <Carousel autoplay>
                      {imgArr.map((item, index) =><div key ={index}> <a href="#"><img src={item} alt=""/></a> < /div>)}
                    </Carousel>
                  : <div></div>
                }
              </div>
              <Listnews url='http://www.iwen.wiki/sxtstu/news/juhenews.php?type=top&count=5' />
            </div>
            <SiderBar url='http://www.iwen.wiki/sxtstu/news/juhenews.php?type=top&count=20'/>
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}