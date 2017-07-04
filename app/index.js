import React from 'react';
import { render } from 'react-dom';
import MediaQuery from "react-responsive";
import MobileIndex from "./components/mobile/mobile_index.js";
import {Router, Route, Link, hashHistory,IndexRoute} from 'react-router';
import '../app/static/css/common.less';
import PCIndex from "./components/pc/pc_index.js";
import PCCenter from "./components/pc/pc_center.js";
import PCTop from "./components/pc/newsType/pc_top.js";
import PCGuonei from "./components/pc/newsType/pc_guonei.js";
import PCGuoji from "./components/pc/newsType/pc_guoji.js";
import PCJunshi from "./components/pc/newsType/pc_junshi.js";
import PCKeji from "./components/pc/newsType/pc_keji.js";
import PCShishang from "./components/pc/newsType/pc_shishang.js";
import PCTiyu from "./components/pc/newsType/pc_tiyu.js";
import PCYule from "./components/pc/newsType/pc_yule.js";

class App extends React.Component {
    render() {
        return (
            <div>
                {/* PC端 */}
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path='/' component={PCIndex}>
                            <IndexRoute component={PCTop}/>
                            <Route path='/guoji' component={PCGuoji} />
                            <Route path='/guonei' component={PCGuonei} />
                            <Route path='/junshi' component={PCJunshi} />
                            <Route path='/keji' component={PCKeji} />
                            <Route path='/shishang' component={PCShishang} />
                            <Route path='/tiyu' component={PCTiyu} />
                            <Route path='/yule' component={PCYule} />
                        </Route>
                        <Route path='/center' component={PCCenter}></Route>
                    </Router>
                </MediaQuery>
                
                {/* 移动端 */}
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex />
                </MediaQuery>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
)
