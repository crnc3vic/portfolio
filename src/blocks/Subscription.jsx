import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiCheck } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import content from "../Content.json";
import BrandTwo from "../elements/BrandTwo";

const Subscription = () => {
  return (
    <>
      <PageHelmet pageTitle="Pricing Table" />

      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb
        title={"Subscription"}
        image={content.about.headerBackground}
      />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Pricing Table Area  */}
        <div className="rn-pricing-table-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start PRicing Table Area  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">Basic</h4>
                      <div className="pricing">
                        <span className="price">39</span>
                        <span className="subtitle">EUR Per Month</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Static Website
                        </li>
                        <li>
                          <FiCheck /> Responsive Design
                        </li>
                        <li>
                          <FiCheck /> Basic SEO
                        </li>
                        <li>
                          <FiCheck /> Social Media Integration
                        </li>
                        <li>
                          <FiCheck /> Contact Form
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a className="rn-btn" href="#pricing">
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End PRicing Table Area  */}

              {/* Start PRicing Table Area  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing active">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">Professional</h4>
                      <div className="pricing">
                        <span className="price">89</span>
                        <span className="subtitle">EUR Per Month</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Dynamic Website
                        </li>
                        <li>
                          <FiCheck /> Interactive Elements
                        </li>
                        <li>
                          <FiCheck /> Advanced SEO
                        </li>
                        <li>
                          <FiCheck /> Content Management System
                        </li>
                        <li>
                          <FiCheck /> Custom Animations
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a className="rn-btn" href="#pricing">
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End PRicing Table Area  */}

              {/* Start PRicing Table Area  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">Enterprise</h4>
                      <div className="pricing">
                        <span className="price">149</span>
                        <span className="subtitle">EUR Per Month</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> E-commerce Functionality
                        </li>
                        <li>
                          <FiCheck /> Secure Payment Integration
                        </li>
                        <li>
                          <FiCheck /> Inventory Management
                        </li>
                        <li>
                          <FiCheck /> Customer Accounts
                        </li>
                        <li>
                          <FiCheck /> Sales Reporting
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a className="rn-btn" href="#pricing">
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End PRicing Table Area  */}
            </div>
          </div>
        </div>
        {/* End Pricing Table Area  */}
        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}
      </main>
      {/* End Page Wrapper  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area  */}
    </>
  );
};
export default Subscription;
