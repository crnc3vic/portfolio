import React, { Component } from "react";
import content from "../../../Content.json";

class About extends Component{
    render(){
        let title = content.about.bigColumn.title,
        description = content.about.bigColumn.content;
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/FrankfurtAmMainDev.webp" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">{content.about.smallColumnLeft.title}</h3>
                                                <p>{content.about.smallColumnLeft.content}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                            <h3 className="title">{content.about.smallColumnRight.title}</h3>
                                                <p>{content.about.smallColumnRight.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;