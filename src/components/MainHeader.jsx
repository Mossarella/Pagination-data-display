import React from "react";
import { DropdownButton, Dropdown, Row, Col } from "react-bootstrap";

import { VscSettingsGear } from "react-icons/vsc";
import { IoPinSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
export const MainHeader = (props) => {
  function DropDownList() {
    return (
      <DropdownButton
        variant="secondary"
        size="sm"
        title=""
        className=" d-inline-block  "
      >
        <Dropdown.Item href="">Any</Dropdown.Item>
        <Dropdown.Item href="">Any</Dropdown.Item>
        <Dropdown.Item href="">Any</Dropdown.Item>
      </DropdownButton>
    );
  }
  function DropDownSort() {
    return (
      <React.Fragment>
        <IoPinSharp className="iconSmall me-2 appear d-none d-lg-flex" />
        <BiEdit className="iconSmall me-2 appear d-none d-lg-flex" />
        <DropdownButton
          variant="secondary"
          size="sm"
          align="end"
          title=""
          className="d-inline-block appear "
        >
          <Dropdown.Item href="" onClick={props.popUpToggle}>
            <BsThreeDots />
            &nbsp; Select to display
          </Dropdown.Item>
          <Dropdown.Item href="">
            <FiFilter />
            &nbsp; Filter
          </Dropdown.Item>
          <Dropdown.Item href="">
            <RiDeleteBinLine />
            &nbsp; Delete this filter
          </Dropdown.Item>
        </DropdownButton>
      </React.Fragment>
    );
  }

  return (
    <div className=" m-4">
      <div>
        <Row style={{ height: "40px" }} className="ms-1 me-1 ">
          <Col className="d-flex justify-content-start align-items-center">
            <p className="d-inline-block mb-0 me-2 text-nowrap">
              Contact person list
            </p>
            <DropDownList />
          </Col>

          <Col className="d-flex justify-content-end align-items-center ">
            <button
              style={{ height: "30px" }}
              className="btn btn-outline-secondary p-2 align-items-center d-flex me-2 shadow-none d-none d-lg-flex"
            >
              + Add contact person
            </button>
            <button
              style={{ height: "30px" }}
              className="btn btn-outline-secondary p-2 align-items-center d-flex me-2 shadow-none d-none d-lg-flex"
            >
              import
            </button>
            <VscSettingsGear className="iconSmall appear" />
          </Col>
        </Row>
      </div>

      <div>
        <Row
          className="d-flex align-items-center bg-secondary bg-opacity-10 m-1"
          style={{ height: "40px" }}
        >
          <Col className="d-flex justify-content-start">
            <p className="m-0 text-nowrap mini">Filter Data : customer 2022</p>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <DropDownSort />
          </Col>
        </Row>
      </div>
    </div>
  );
};
