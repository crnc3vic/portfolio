import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Digital identity creation',
        description: 'Crafting Iconic Identities. Elevate your brand with our expert logo and digital identity design. Your vision, our creativity.'
    },
    {
        icon: '02',
        title: 'Website Development',
        description: 'Transforming Ideas into Stunning Websites. We specialize in web development that brings your vision to life. Your online success starts here.'
    },
    {
        icon: '03',
        title: 'User Experience (UX) Design',
        description: 'Elevate User Experiences. Our UX design expertise enhances usability and satisfaction, ensuring your digital products delight and engage users.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;