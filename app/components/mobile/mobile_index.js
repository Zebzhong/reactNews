import React from "react";
import MobileHeader from '../mobile/mobile_header.js';
import MobileBody from '../mobile/mobile_body.js';
import MobileFooter from '../mobile/mobile_footer.js';

export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader />
                <MobileBody />
                <MobileFooter />
            </div>
        )
    }
}