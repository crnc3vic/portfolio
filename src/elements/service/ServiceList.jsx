import React ,{ Component }from "react";
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
    },
    {
        icon: <FiLayers />,
        title: content.services.individualServices.service5.title,
        description: content.services.individualServices.service4.description,
    },
    {
        icon: <FiUsers />,
        title: content.services.individualServices.service6.title,
        description: content.services.individualServices.service4.description,
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
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
            </React.Fragment>
        )
    }
}
export default ServiceThree;
