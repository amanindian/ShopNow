import React from "react";
import P1 from "../../Image/people/1.jpeg";
import P2 from "../../Image/people/2.png";
import P3 from "../../Image/people/3.jpg";

export default function People() {
  return (
    <div className="people">
      <div>
        <img src={P1} alt="Aman Kumar Pic Aman Indian amanindian" />
        <p>
          <span>Aman Kumar</span>
          <br />
          Founder &amp; CEO <br />
          Phone: +918002579962
          <br /> Email: kramanpandey53@gmail.com
        </p>
      </div>
      <div>
        <img src={P2} alt="Director Pic" />
        <p>
          <span>Pankaj Pandey</span>
          <br /> Team Management <br />
          Phone: +910000078928
          <br /> Email: pankajpandey@shopnow.com
        </p>
      </div>
      <div>
        <img src={P3} alt="Director Pic" />
        <p>
          <span>Araman Arya</span>
          <br /> Senior Markting Manager <br />
          Phone: +910000486927
          <br /> Email: aramanarya@shopnow.com
        </p>
      </div>
    </div>
  );
}
