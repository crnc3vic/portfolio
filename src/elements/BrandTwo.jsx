import React, { Component } from "react";
import content from "../Content.json";

class BrandTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="brand-style-2">
          {content.partners.map((partner, index) => (
            <li key={index}>
              <img src={partner} alt="Logo Images" />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default BrandTwo;
