import React, { Component } from "react";
import {Helmet} from 'react-helmet'
import content from "../../Content.json";

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content={content.description} />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
