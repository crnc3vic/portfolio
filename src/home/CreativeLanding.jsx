import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { slickDot } from "../page-demo/script";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import HeaderThree from "../component/header/HeaderThree";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";
import content from "../Content.json";

const portfolioList = Object.values(content.portfolio.list);

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: content.name,
    description: content.description,
    buttonText: content.footer.columns.second.contact,
    buttonLink: "/contact",
  },
];

class CreativeLanding extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  stickyHeader() {}
  render() {
    const PostList = BlogContent.slice(0, 5);

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="Creative Landing" />
        {/* Start Header Area  */}
        <HeaderThree homeLink="/" />

        {/* End Header Area  */}

{ /* Start Slider Area   */
}
<div className="slider-activation slider-creative-agency" id="home">
    <div className="bg_image bg_image--26" data-black-overlay="6"> {
        SlideList.map((value, index) => (<div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
            key={index}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={
                            `inner ${
                                value.textPosition
                            }`
                        }> {
                            value.category ? <span> {
                                value.category
                            }</span> : ""
                        }
                            {
                            value.title ? (<h1 className="title theme-gradient"> {
                                value.title
                            } </h1>) : ("")
                        }
                            {
                            value.description ? (<p className="description"> {
                                value.description
                            }</p>) : ("")
                        }
                            {
                            value.buttonText ? (<div className="slide-btn">
                                <a className="rn-button-style--2 btn-primary-color"
                                    href={
                                        `${
                                            value.buttonLink
                                        }`
                                }> {
                                    value.buttonText
                                } </a>
                            </div>) : ("")
                        } </div>
                    </div>
                </div>
            </div>
        </div>))
    } </div>
</div> { /* End Slider Area   */
} { /* Start Service Area  */
}
<div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
    <div className="container">
        <div className="row creative-service">
            <div className="col-lg-12">
                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"/>
            </div>
        </div>
    </div>
</div> { /* End Service Area  */
} { /* Start About Area */
}
<div className="about-area ptb--120 bg_color--5" id="about">
    <div className="about-wrapper">
        <div className="container">
            <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                    <div className="thumbnail">
                        <img className="w-100"
                            src={
                                content.about.image
                            }
                            alt="About Images"/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="about-inner inner">
                        <div className="section-title">
                            <h2 className="title"> {
                                content.about.column.altTitle
                            }</h2>
                            <p className="description"> {
                                content.about.column.description
                            }</p>
                        </div>
                        <div className="row mt--30">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="about-us-list">
                                    <h3 className="title"> {
                                        content.about.smallColumnLeft.title
                                    }</h3>
                                    <p> {
                                        content.about.smallColumnLeft.content
                                    }</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="about-us-list">
                                    <h3 className="title"> {
                                        content.about.smallColumnRight.title
                                    }</h3>
                                    <p> {
                                        content.about.smallColumnRight.content
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> { /* End About Area */
} { /* Start Portfolio Area */
}
<div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
    <div className="rn-slick-dot">
        <div className="container">
            <div className="row"> {/* ... Section Title ... */} </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="slick-space-gutter--15 slickdot--20">
                        <Slider {...slickDot}> {
                            portfolioList.map((value, index) => (<div className="portfolio"
                                key={index}>
                                <div className="thumbnail-inner">
                                    <div className={
                                        `thumbnail ${
                                            value.image
                                        }`
                                    }></div>
                                    <div className={
                                        `bg-blr-image ${
                                            value.image
                                        }`
                                    }></div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p> {
                                            value.category
                                        }</p>
                                        <h4>
                                            <a href="/portfolio-details"> {
                                                value.title
                                            }</a>
                                        </h4>
                                        <div className="portfolio-button">
                                            <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                        </div>
                                    </div>
                                </div>
                                <Link className="link-overlay" to="/portfolio-details"></Link>
                            </div>))
                        } </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> { /* End Portfolio Area */
} { /* Start CounterUp Area */
}
<div className="rn-counterup-area pt--25 pb--110 bg_color--1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center">
                    <h3 className="fontWeight500"> {
                        content.counterHomepage.title
                    }</h3>
                </div>
            </div>
        </div>
        <CounterOne/>
    </div>
</div> { /* End CounterUp Area */
} { /* Start Team Area  */
}
<div className="rn-team-area ptb--120 bg_color--1" id="team">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                    <h2 className="title"> {
                        content.teamSection.title
                    }</h2>
                    <p> {
                        content.teamSection.description
                    }</p>
                </div>
            </div>
        </div>
        <div className="row">
            <Team column="col-lg-4 col-md-6 col-sm-6 col-12"/>
        </div>
    </div>
</div> { /* End Team Area  */
} { /* Start Testimonial Area */
}
<div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
    <div className="container">
        <Testimonial/>
    </div>
</div> { /* End Testimonial Area */
} { /* Start Blog Area */
}
<div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
    <div className="container">
        <div className="row align-items-end">
            <div className="col-lg-6">
                <div className="section-title text-left">
                    <h2> {
                        content.blog.title
                    }</h2>
                    <p> {
                        content.blog.description
                    }</p>
                </div>
            </div>
        </div>
        <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
            <div className="col-lg-12">
                <Slider {...slickDot}> {
                    PostList.map((value, i) => (<div className="blog blog-style--1"
                        key={i}>
                        <div className="thumbnail">
                            <a href="/blog-details">
                                <img src={
                                        `/assets/images/blog/blog-${
                                            value.images
                                        }.jpg`
                                    }
                                    alt="Blog Images"/>
                            </a>
                        </div>
                        <div className="content">
                            <p className="blogtype"> {
                                value.category
                            }</p>
                            <h4 className="title">
                                <a href="/blog-details"> {
                                    value.title
                                }</a>
                            </h4>
                            <div className="blog-btn">
                                <a className="rn-btn text-white" href="/blog-details"> {
                                    content.blog.buttons.readMore
                                }</a>
                            </div>
                        </div>
                    </div>))
                } </Slider>
            </div>
        </div>
    </div>
</div> { /* End Blog Area */
} { /* Start Contact Us */
}
<div className="rn-contact-us ptb--120 bg_color--5" id="contact">
    <Contact/>
</div> { /* End Contact Us */
} { /* Start Brand Area */
}
<div className="rn-brand-area bg_color--1 ptb--120">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <BrandTwo/>
            </div>
        </div>
    </div>
</div> { /* End Brand Area */
} { /* Start Footer Style  */
}
<FooterTwo/>{ /* End Footer Style  */
} { /* Start Back To Top */
}
<div className="backto-top">
    <ScrollToTop showUnder={160}>
        <FiChevronUp/>
    </ScrollToTop>
</div> { /* End Back To Top */
}
</Fragment>);}}
export default CreativeLanding;

