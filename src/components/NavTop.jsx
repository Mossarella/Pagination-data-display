import React from "react";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsQuestionCircle } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import {
  IoChatbubbleEllipsesOutline,
  IoNotificationsCircleOutline,
} from "react-icons/io5";

import { Nav, Navbar, Form, InputGroup, Row } from "react-bootstrap";

export const NavTop = () => {
  let scrollbarWidth = window.innerWidth - document.body.clientWidth + "px";

  const navTopContent = [
    {
      text: "Chat",
      icon: <IoChatbubbleEllipsesOutline className="icon appear" />,
    },
    {
      text: "Notification",
      icon: <IoNotificationsCircleOutline className="icon appear" />,
    },
    {
      text: "Help",
      icon: <BsQuestionCircle className="icon appear" />,
    },
    {
      text: "Menu",
      icon: <CgMenuRound className="icon appear" />,
    },
    {
      text: "User",
      icon: <BiUserCircle className="icon appear" />,
    },
  ];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      className=" shadow-sm ps-4 pe-4 py-3"
      style={{ minHeight: "75px" }}
    >
      <Navbar.Brand>
        <img
          src="/images/logomainblue - Copy.jpg"
          className="d-inline-block align-top rounded-circle icon appear"
          alt=""
        />
      </Navbar.Brand>

      <Nav className="me-auto ">
        <div className="d-flex flex-column">
          <h5 className="m-0 fw-bold">Company’s name</h5>
          <p className="m-0">Slogan of the company</p>
        </div>
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " className="me-2">
        <GiHamburgerMenu />
      </Navbar.Toggle>

      <Navbar.Collapse>
        <Nav className="d-flex justify-content-center align-items-stretch align-items-lg-center  ms-auto">
          <InputGroup
            className=" rounded-pill border-dark border border-1  mt-3 mt-lg-0"
            style={{ height: "35px" }}
          >
            <InputGroup.Text className=" bg-transparent border-0">
              {" "}
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search"
              className="bg-transparent border-start-0 shadow-none border-0 "
              aria-label="Search"
            />
          </InputGroup>

          <div className="vr ms-3 me-3 d-none d-lg-block"></div>

          {navTopContent.map((item) => {
            return (
              <div
                className="ms-lg-0 me-lg-3 ms-0 me-0  mt-3 mt-lg-0 "
                key={item.text}
              >
                <Row>
                  <div style={{ width: "50px" }}>{item.icon}</div>
                  <div
                    style={{ width: "calc(100% - 50px)" }}
                    className="d-block d-lg-none"
                  >
                    <p className="text-start d-flex h-100 align-items-center mb-0 fs-6">
                      {item.text}
                    </p>
                  </div>
                </Row>
              </div>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
