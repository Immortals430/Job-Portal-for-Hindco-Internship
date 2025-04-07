import React from "react";
import "./card.css";

export default function Card() {

  return (
    <div className="card flex" >
      <div>
        <img src="./company-icon.png"  width={50} />
      </div>
      <div className="job-details">
        <h4>Jr Frontend Developer</h4>
        <div>Enigma Solutions</div>
        <div>Pune</div>
        <div>0-1 Yrs</div>
        <div className="flex skills">
          <div className="html">HTML</div>
          <div className="css">CSS</div>
          <div className="javascript">Javascript</div>
          <div className="react">React</div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          fuga voluptatem ab similique odio. Doloremque error ut mollitia
          provident et!
        </div>
      </div>
    </div>
  );
}
