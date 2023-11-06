import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import content from "../Content.json";
const Testimonials = () => {
    const testimonials = content.testimonials;
  
    return (
      <Tabs>
        {Object.keys(testimonials).map((testimonialKey) => {
          const testimonial = testimonials[testimonialKey];
          return (
            <TabPanel key={testimonialKey}>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>{testimonial.content}</p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>{testimonial.author}</span> - {testimonial.position}
                  </h6>
                </div>
              </div>
            </TabPanel>
          );
        })}
  
        <TabList className="testimonial-thumb-wrapper">
          {Object.keys(testimonials).map((testimonialKey, index) => (
            <Tab key={testimonialKey}>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src={`/assets/images/client/testimonial-${index + 1}.jpg`}
                    alt={`Testimonial ${index + 1}`}
                  />
                </div>
              </div>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    );
  };
  
  export default Testimonials;