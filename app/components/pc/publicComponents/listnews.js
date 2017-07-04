import React, {Component} from 'react';
import {getData} from '../../../Fun/get.js';
import '../../../static/css/listnews.less';

export default class Listnews extends Component{
  constructor() {
    super();
    this.state = {
      news:[
        {
          title:''
        }
      ]
    }
  }
  componentDidMount(){
    let result = getData(this.props.url);
    result.then(res=>res.json())
    .then(json=>{
      this.setState({
        news:json
      })
    })
  }
  render() {
    return (
      <ul className="wrapper">
        {
          this.state.news.map((item,index)=>{
            return (
              <li key={index}>
                <div className="item">
                  <div className="pic">
                    <a href={item.url}><img src={item.thumbnail_pic_s} alt=""/></a>
                  </div>
                  <div className="cont">
                    <h2>
                      <a href={item.url}>{item.title}</a>
                    </h2>
                    <div className="info">
                      <div className="time">
                        <b className={this.props.type ? this.props.type : "top"}>{item.category ? item.category : '时尚'}</b>
                        <span>发布时间 :
                        </span>
                        <i>{item.date}</i>
                      </div>
                      <div className="from">来源 :
                        <a href="javascript:;">{item.author_name}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    ) 
  }
}
