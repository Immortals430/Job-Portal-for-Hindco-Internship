import React from "react";
import { BsFilterRight } from "react-icons/bs";
import "./filtersec_M.css";

export default function FilterSec({ setMobileFilter }) {

  return (
    <section className="filter-sec">
      <div className="filter-icon flex">
        <BsFilterRight size={22} />
      </div>
      <div className="filter-list-m flex">
        <div onClick={() => setMobileFilter(prev => !prev)}>Location</div>
        <div onClick={() => setMobileFilter(prev => !prev)}>Experience</div>
        <div onClick={() => setMobileFilter(prev => !prev)}>Salary</div>
        <div onClick={() => setMobileFilter(prev => !prev)}>Work Mode</div>
        <div onClick={() => setMobileFilter(prev => !prev)}>safdsfd</div>
        <div onClick={() => setMobileFilter(prev => !prev)}>dfsfdsf</div>
        <div onClick={() => setMobileFilter(prev => !prev)}>fdsfdsf</div>
        <div onClick={() => setMobileFilter(prev => !prev)}>fdsfdsf</div>
      </div>
    </section>
  );
}
