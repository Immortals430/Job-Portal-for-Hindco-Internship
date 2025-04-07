import React from "react";
import "./filtersec_d.css";
import Locations from "../../Locations";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export default function FilterSec_D() {
  return (
    <>
      <div className="filtersec_d">
        <h1>Filters</h1>

        <div className="flex filters-d">
          <div>
            <span>Experience</span>
            <span>
              <FiPlus />
            </span>
          </div>
          <div>
            <span>Work Mode</span>
            <span>
              <FiPlus />
            </span>
          </div>
          <div>
            <span>Location</span>
            <span>
              <FiMinus />
            </span>
          </div>
          <div className="locations">
            <Locations />
          </div>
        </div>
      </div>
    </>
  );
}
