import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import content from "../../Content.json";

const ServiceList = [
    {
        icon: <FiCast />,
        title: content.services.individualServices.service1.title,
        description: content.services.individualServices.service1.description,
    },
    {
        icon: <FiLayers />,
        title: content.services.individualServices.service2.title,
        description: content.services.individualServices.service2.description,
    },
    {
        icon: <FiUsers />,
        title: content.services.individualServices.service3.title,
        description: content.services.individualServices.service3.description,
    },
    {
        icon: <FiMonitor />,
        title: content.services.individualServices.service4.title,
        description: content.services.individualServices.service4.description,
    }
]

class ServiceTwo extends Component{
    render(){
        let title = content.services.title,
        description = content.services.description
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
