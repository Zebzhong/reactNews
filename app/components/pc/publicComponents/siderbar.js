import React, {Component} from 'react';
import {getData} from '../../../Fun/get.js';
import '../../../static/css/siderbar.less';

export default class SiderBar extends Component {
  constructor() {
    super();
    this.state = {
      news: [
        {
          title: ''
        }
      ]
    }
  }
  componentDidMount() {
    let result = getData(this.props.url);
    result
      .then(res => res.json())
      .then(json => {
        this.setState({news: json})
      })
  }
  render() {
    return (
      <ul className="siderbar">
        <h2>24小时热闻</h2>
        {this.state.news.map((item, index) => {
          if(index>8){
              return (
                <li key={index}>
                  <a href={item.url}>
                    <div className="pic">
                      <img src={item.thumbnail_pic_s} alt=""/>
                    </div>
                    <div className="news_inner">
                      <p>{item.title}</p>
                    </div>
                  </a>
                </li>
              )
          }
          })
        }
      </ul>
    )
  }
}
