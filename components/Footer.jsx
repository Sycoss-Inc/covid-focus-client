import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
      <div className="col-7 col-md-3  address-holder">
          <Link href="https://www.google.com/maps/place/Velur+Panchayath/@10.6400259,76.1576009,15z/data=!4m5!3m4!1s0x0:0x4b1bfc148afd1b50!8m2!3d10.6400096!4d76.1576039">
            <a className="address">
            Sector 3, Wadakkancherry Rd, Near Velur
              Post Office, Velur,Thrissur, Kerala 680601<HiLocationMarker style={{color:"#810000"}} />
              
              
            </a>
          </Link>
          <br />
        </div>
        <div className="col-3 d-none d-md-block d-xl-block d-lg-block">
          <Link href="#">
            <a>Emergency</a>
          </Link>
          <br />
          <Link href="#">
            <a>Helpdesk</a>
          </Link>
          <br />
        </div>
        <div className="col-3 d-none d-md-block d-xl-block d-lg-block">
          <Link href="#">
            <a>How To</a>
          </Link>
          <br />
          <Link href="#">
            <a> Fact Check</a>
          </Link>
          <br />
        </div>
        <div className="col-5 col-md-3   ">
          <Link href="tel:04885 285 431">
            <a>
              <FaPhoneAlt className="ms-2"  />
              &nbsp;
              Contact
            </a>
          </Link>
          <br />
          <Link href="https://lsgkerala.gov.in/en/lbelection/electdmemberdet/2015/732">
            <a>Visit Website</a>
          </Link>
          <br />
        </div>
      </div>
      <a>Last updated 5 hours ago</a>
      <small> &copy; Copyright 2021</small>
    </div>
  );
}
