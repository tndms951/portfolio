import React, { Component } from 'react';
import './Box.css';
import img from './img/01.jpg';
import img1 from './img/02.jpg';
import img2 from './img/03.jpg';
import img3 from './img/04.jpg';
import img4 from  './img/05.jpg';
import img5 from './img/06.jpg';
import img6 from './img/07.jpg';
import img7 from './img/08.jpg';
import img8 from './img/09.jpg';
import img9 from './img/10.jpg';


function Box() {
  return (
  <>

  {/* 첫번째 박스 */}
<>
    <div className="all">
    <div className="box_one">
      <div className="wrap">
      <div className="box_wrap01">
          <a href="#">
              <img src={img} alt={"img"}/>
          </a>
       </div>
       <div className="box_wrap02">
          <a href="#">
              <img src={img1} alt={"img1"}/>
          </a>
       </div>
      </div>
      <div className="wrap02">
      <div className="box_wrap03">
      <a href="#">
              <img src={img2} alt={"img2"}/>
          </a>
      </div>
      <div className="box_wrap04">
      <a href="#">
              <img src={img3} alt={"img3"}/>
          </a>
      </div>
      </div>
    </div>

    <div className="box_two">
      <div className="wrap03">
      <div className="box_wrap05">
          <a href="#">
              <img src={img4} alt={"img4"}/>
              <h1/>
         </a>
      </div>
    </div>
    </div>
    </div>
</>


{/* 두번째 박스 */}

{/* <>
    <div className="all2">
    <div className="box_three">
      <div className="wrap04">
      <div className="box_wrap06">
          <a href="#">
              <img src={img5} alt={"img5"}/>
          </a>
       </div>
       <div className="box_wrap07">
          <a href="#">
              <img src={img6} alt={"img6"}/>
          </a>
       </div>
      </div>
      <div className="wrap05">
      <div className="box_wrap08">
      <a href="#">
              <img src={img7} alt={"img7"}/>
          </a>
      </div>
      <div className="box_wrap09">
      <a href="#">
              <img src={img8} alt={"img8"}/>
          </a>
      </div>
      </div>
    </div>

    <div className="box_for">
      <div className="wrap06">
      <div className="box_wrap10">
          <a href="#">
              <img src={img9} alt={"img9"}/>
         </a>
      </div>
    </div>
    </div>
    </div>
</> */}




</>
  );
}

  


export default Box; 