import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu, HiSearch } from "react-icons/hi";

export default function Navbar({ title }) {
  const [sideBar, setSidebar] = useState(false);

  const navLinks = [
    { pageName: "Home", route: "/", classname: "Dashboard" },
    { pageName: "Statistics", route: "/Stats", classname: "Statistics" },
    { pageName: "Emergency", route: "/medical", classname: "Emergency" },
  ];

  const drops = [
    {
      droptitle: "Contacts",
      dropItems: [
        { pageName: "Ward Member", route: "#", classname: "WardMember" },
        { pageName: "Aasha Workers", route: "#", classname: "AashaWorkers" },
        { pageName: "RRT Members", route: "#", classname: "RRTMembers" },
        { pageName: "Medical", route: "#", classname: "Medical" },
      ],
    },
    {
      droptitle: "Medical",
      dropItems: [
        {
          pageName: "Medical Equipments",
          route: "#",
          classname: "MedicalEquipments",
        },
        { pageName: "Vaccination", route: "#", classname: "Vaccination" },
        { pageName: "How To", route: "#", classname: "HowTo" },
      ],
    },
    {
      droptitle: "More",
      dropItems: [
        { pageName: "Home Delivery", route: "#", classname: "HomeDelivery" },
        { pageName: "Fact Check", route: "#", classname: "FactCheck" },
        { pageName: "Alerts", route: "#", classname: "Alerts" },
      ],
    },
  ];

  function NavOptions() {
    return navLinks.map((link, index) => (
      <li class="nav-item" key={index}>
        <Link href={link.route}>
          <a class={`nav-link active ${link.classname}`} aria-current="page">
            {link.pageName}
          </a>
        </Link>
      </li>
    ));
  }

  function Dropdown() {
    return drops.map((drop, index) => (
      <li class="nav-item dropdown" key={index}>
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {drop.droptitle}
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          {drop.dropItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.route}>
                  <a className="dropdown-item" href="#">
                    {item.pageName}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    ));
  }

  function Sidenav(dr, index) {
    var objectArray = dr ? drops[index].dropItems : navLinks;
    return objectArray.map((link, index) => (
      <div className={link.classname} key={index}>
        <Link href="/">
          <a>
            {" "}
            <button
              className="linkbutton"
              onClick={() => {
                toggleSideBar();
              }}
            >
              {link.pageName}
            </button>
          </a>
        </Link>
      </div>
    ));
  }

  function SideDropDown() {
    return drops.map((drop, index) => (
      <div class="accordion-item" key={index}>
        <h2 class="accordion-header" id={`heading${index}`}>
          <button
            class="accordion-button collapsed acc-pagename"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded="false"
            aria-controls={`collapse${index}`}
          >
            {drop.droptitle}
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          class="accordion-collapse  collapse"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#dropDownOptions"
        >
          <div class="accordion-body  acc-content">{Sidenav(true, index)}</div>
        </div>
      </div>
    ));
  }

  const toggleSideBar = () => {
    setSidebar(!sideBar);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const spot = document.querySelector(".spot");
    const point = document.querySelector(".point");
    const sidenav = document.querySelector(".sidenav");

    const element = document.querySelector(`.${title}`);
    console.log(element);
    element.classList.add("active-option");
    element.classList.add("selected");

    //Intersection observer
    const handleScrollLg = (entries) => {
      const spotIsVisible = entries[0].isIntersecting;
      if (spotIsVisible) navbar.classList.remove("scrolled-nav");
      else navbar.classList.add("scrolled-nav");
    };

    const handleScrollSm = (entries) => {
      const pointIsVisible = entries[0].isIntersecting;
      if (pointIsVisible) sidenav.classList.remove("scrolled-sidenav");
      else sidenav.classList.add("scrolled-sidenav");
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshhold: 0,
    };

    const observer_lg = new IntersectionObserver(handleScrollLg, options);
    observer_lg.observe(spot);
    const observer_sm = new IntersectionObserver(handleScrollSm, options);
    observer_sm.observe(point);
  }, []);

  return (
    <>
      <nav class="navbar fixed-top navbar-expand-md d-none d-sm-none d-md-block  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            PSYCHOS
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavOptions />
              <Dropdown />
            </ul>

            <form class="d-flex search">
              <input
                class="form-control me-2 search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn " type="submit">
                <HiSearch style={{ color: "gray" }} size={30} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="spot d-none d-md-block "></div>
      <nav className="d-sm-block d-md-none sidenav">
        <button className="toggle-icon">
          <HiMenu
            color={sideBar && "white"}
            onClick={() => {
              toggleSideBar();
            }}
          />
        </button>
      </nav>
      <div className="point"></div>
      <div
        className={
          sideBar
            ? "d-sm-block d-md-none sidebar active"
            : "d-sm-block d-md-none sidebar "
        }
        id="mySidebar"
      >
        {Sidenav(false, 0)}
        <div class="accordion accordian-flush" id="dropDownOptions">
          {SideDropDown()}
        </div>
      </div>
    </>
  );
}
