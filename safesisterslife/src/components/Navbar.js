import React from 'react';
import "../styles/navbar.css";
// import { AiOutlineSearch } from "react-icons/ai";


const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar container">
          <div className="nav-left">
            <div className="nav-img">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
                alt="logo"
              />
            </div>
            <div className="nav-search">
              {/* <AiOutlineSearch /> */}
              <input
                type="text"
                placeholder="Search Opportunities"
              />
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-tabs">
              <div className="Internship-tab">

                <span className="tab-name">Internships</span>

              </div>
              <div className="job-tab">

                <span className="tab-name">Jobs</span>

              </div>
              <div className="compete-tab">


                <span className="tab-name">compete</span>

              </div>
              <div className="mentorship-tab">
                <span className="tab-name">mentorship</span>
              </div>
              <div className="courses-tab">
                <span className="tab-name">Courses</span>
              </div>
              <div className="practice-tab">
                <span className="tab-name">practice</span>
              </div>
            </div>
            <div className="nav-btns">
              <button className="login-btn">
                <span className="tab-name">login</span>
              </button>
              <button className="host-btn">
              <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
                  alt="host btn"
                />
                <span className="w-11">Host</span>
              </button>
              <button className="business-btn">
              <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/662f5e458f52a_for_business.svg"
                  alt="business btn"
                />
                <span>For Business</span>  
              </button>
             
            </div>
          </div>
        </div>
      </nav>
    </>
)}

export default Navbar
