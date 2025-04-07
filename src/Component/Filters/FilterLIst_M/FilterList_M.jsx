import React from "react";
import "./FilterList_M.css";
import Locations from "../../Locations";
import { RxCross2 } from "react-icons/rx";

export default function FilterList_M({ mobileFilter, setMobileFilter }) {
  return (
    <section className={`filterlist-sec-m ${mobileFilter && "appear"}`}>
      <div className={`filterlist-m ${mobileFilter && "appear"}`}>
        <div className="head flex">
          <h1>Filter Jobs</h1>
          <RxCross2 onClick={() => setMobileFilter(false)} />
        </div>

        <div className="flex">
          <div className="filters flex">
            <div>Location</div>
            <div>Experience</div>
            <div>Salary</div>
            <div>Job Type</div>
          </div>
          <div className="cities">
            <Locations />
          </div>
        </div>
      </div>
    </section>
  );
}
