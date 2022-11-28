import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiDashboardLine } from "react-icons/ri";
import { RiContactsBookFill } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";
import { Row, Col, Collapse } from "react-bootstrap";

export const NavSide = (props) => {
  const [open, setOpen] = useState(false);

  const navSideContent = [
    {
      text: "Contact",
      icon: (
        <GiHamburgerMenu className=" iconSmall appear" onClick={props.toggle} />
      ),
    },
    {
      text: "Dashboard",
      icon: (
        <RiDashboardLine className=" iconSmall appear" onClick={props.toggle} />
      ),
    },
    {
      text: "Contact person list",
      icon: (
        <RiContactsBookFill
          className=" iconSmall appear"
          onClick={props.toggle}
        />
      ),
    },
    {
      text: "Report",
      icon: (
        <HiOutlineDocumentReport
          className=" iconSmall appear"
          onClick={props.toggle}
        />
      ),
    },
    {
      text: "Try refresh the page!",
      icon: (
        <RiRefreshLine className=" iconSmall appear" onClick={props.toggle} />
      ),
    },
  ];

  return (
    <div className="d-flex vh-100">
      <ul className="text-decoration-none list-unstyled d-flex flex-column ">
        {navSideContent.map((item) => {
          return (
            <li key={item.text}>
              <Row
                style={{ height: "40px" }}
                className=" mt-4 d-flex align-items-center"
              >
                <Col xs={2}>
                  <span className="text-white">{item.icon}</span>
                </Col>
                <Col xs={10} className="d-flex align-items-center">
                  <p
                    className="text-white appear m-0"
                    style={
                      props.toggleState
                        ? { opacity: "100%" }
                        : { opacity: "0%" }
                    }
                  >
                    {item.text}
                  </p>
                </Col>
              </Row>
            </li>
          );
        })}
        <li>
          <Row style={{ height: "40px" }} className=" mt-4">
            <Col xs={2}>
              <span className="text-white">
                <FiSettings
                  className=" iconSmall appear"
                  onClick={props.toggle}
                />
              </span>
            </Col>
            <Col xs={10}>
              <button
                className=" border-0 bg-transparent"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <p
                  className="text-white text-start appear m-0"
                  style={
                    props.toggleState ? { opacity: "100%" } : { opacity: "0%" }
                  }
                >
                  Setting
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-white text-end ">
                    <MdArrowDropDown />
                  </span>
                </p>

                <Collapse in={open}>
                  <div id="example-collapse-text appear">
                    <p className="text-white text-start appear  pt-4 m-0">
                      {" "}
                      &#9900; Manage Layout
                    </p>
                    <p className="text-white text-start appear pt-4 m-0">
                      &#9900; Member
                    </p>
                    <p className="text-white text-start appear pt-4 m-0">
                      &#9900; Data access
                    </p>
                    <p className="text-white text-start appear pt-4 m-0">
                      &#9900; System log
                    </p>
                  </div>
                </Collapse>
              </button>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
};
