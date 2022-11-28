import React, { createContext, useEffect, useState } from "react";
import { MainContent } from "./MainContent";
import { MainHeader } from "./MainHeader";
import { PopUpSelectDisplay } from "./PopUpSelectDisplay";
import { NavSide } from "./NavSide";

import { Row } from "react-bootstrap";

const selectorId = {
  name: "id",
  selector: (row) => row.id,
  width: "60px",
  sortable: true,

  id: 1,
};
const selectorFname = {
  name: "First name",
  selector: (row) => row.fname,
  sortable: true,

  minWidth: "200px",
  id: 2,
};
const selectorLname = {
  name: "Last name",
  selector: (row) => row.lname,
  sortable: true,

  minWidth: "200px",
  id: 3,
};
const selectorEmail = {
  name: "Email",
  selector: (row) => row.username,
  sortable: true,

  minWidth: "250px",
  textAlign: "start",

  id: 4,
};
const selectorAvatar = {
  name: "Avatar",
  selector: (row) => row.avatar,
  cell: (row) => <img src={row.avatar} width={60} alt={row.name}></img>,
  width: "120px",

  id: 5,
};
const selectorCompany = {
  name: "Company",
  selector: (row) => row.company,

  minWidth: "200px",
  sortable: true,
  id: 6,
};
const selectorSource = {
  name: "Source",
  selector: (row) => row.source,
  sortable: true,
  minWidth: "150px",
  id: 7,
};
const selectorOwner = {
  name: "Owner",
  selector: (row) => row.owner,

  minWidth: "150px",
  sortable: true,
  id: 8,
};
const selectorAddDate = {
  name: "Add date",
  selector: (row) => row.addDate,

  minWidth: "150px",

  sortable: true,
  id: 9,
};
const selectorEditDate = {
  name: "Edit date",
  selector: (row) => row.editDate,

  minWidth: "150px",

  sortable: true,
  id: 10,
};
const selectorStatus = {
  name: "Status",
  selector: (row) => row.status,

  minWidth: "150px",

  sortable: true,
  id: 11,
};
const selectorWebsite = {
  name: "Website",
  selector: (row) => row.webSite,
  minWidth: "250px",

  sortable: true,
  id: 12,
};
const selectorActivity = {
  name: "Activity",
  selector: (row) => row.activity,

  minWidth: "150px",

  sortable: true,
  id: 13,
};
const selectorTelephone = {
  name: "Telephone",
  selector: (row) => row.telephone,
  minWidth: "200px",

  sortable: true,
  id: 14,
};

const categoryAll = [
  selectorId,
  selectorFname,
  selectorLname,
  selectorEmail,
  selectorAvatar,
  selectorCompany,
  selectorSource,
  selectorOwner,
  selectorAddDate,
  selectorEditDate,
  selectorStatus,
  selectorWebsite,
  selectorActivity,
  selectorTelephone,
];
let savedCategory = [
  selectorId,
  selectorAvatar,
  selectorFname,
  selectorLname,
  selectorEmail,
  selectorWebsite,
];
const CategoryContext = createContext();
const SavedCategoryContext = createContext();

const Main = () => {
  const [category, setCategory] = useState(savedCategory);

  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem("toggleNav"));

    if (localItem) {
      setToggleNav(localItem);
    }

    return () => {
      setToggleNav(toggleNav);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("toggleNav", JSON.stringify(toggleNav));
    return () => {
      localStorage.setItem("toggleNav", JSON.stringify(toggleNav));
    };
  }, [toggleNav]);

  function ToggleSideNav() {
    setToggleNav(!toggleNav);
  }

  const [popUpOpen, setPopUpOpen] = useState(false);

  return (
    <CategoryContext.Provider value={categoryAll}>
      <SavedCategoryContext.Provider value={{ category, setCategory }}>
        <React.Fragment>
          <PopUpSelectDisplay
            confirmCategory={() => {
              console.log("confirm");
            }}
            show={popUpOpen}
            onHide={() => setPopUpOpen(false)}
          />

          <Row className="w-100 ms-auto me-auto">
            <div
              style={toggleNav ? { width: "250px" } : { width: "70px" }}
              className=" gx-0 vh-100 bg-dark shadow-sm ps-4 pe-4 position-sticky top-0 appear"
            >
              <NavSide
                toggle={() => {
                  ToggleSideNav();
                }}
                toggleState={toggleNav}
              />
            </div>

            <div
              style={
                toggleNav
                  ? { width: "calc(100% - 250px)" }
                  : { width: "calc(100% - 70px)" }
              }
              className="gx-0 h-100 appear"
            >
              <MainHeader
                popUpToggle={() => {
                  setPopUpOpen(true);
                }}
              />
              <hr className="ms-4 me-4" />
              <MainContent />
            </div>
          </Row>
        </React.Fragment>
      </SavedCategoryContext.Provider>
    </CategoryContext.Provider>
  );
};

export { SavedCategoryContext };
export { CategoryContext };
export { Main };
