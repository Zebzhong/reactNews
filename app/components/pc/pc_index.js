import React from "react";
import PcHeader from './pc_header.js';
import '../../static/css/common.less';

export default class PCIndex extends React.Component {
    render(){
        return (
            <div>
               <PcHeader />
               {this.props.children}
            </div>
        )
    }
}