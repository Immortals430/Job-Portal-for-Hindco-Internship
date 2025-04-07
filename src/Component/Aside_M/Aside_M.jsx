import React from "react";
import "./aside_m.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function Aisde_M({ mobileAside, setMobileAside }) {
  return (
    <section className={`aside-m-sec flex ${mobileAside && "appear"} `}>
      <div className="close">
        <RxCross2 size={30} onClick={() => setMobileAside(false)} />
      </div>
      <div>
        <span>Jobs</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div>
        <span>Active Employees</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div>
        <span>Job Blogs</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div>
        <span>Pricing</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div>
        <span>Post Job</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div>
        <span>Jobseeker Login</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div>
        <span>Employee Login</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
    </section>
  );
}
