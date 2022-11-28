import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Modal, Button, Row } from "react-bootstrap";
import { CategoryContext } from "./Main";
import { SavedCategoryContext } from "./Main";

export const PopUpSelectCol = (props) => {
  const categoryContext = useContext(CategoryContext);
  const { category, setCategory } = useContext(SavedCategoryContext);

  const [categoryRemain, setCategoryRemain] = useState([]);
  // const [categorySelect, setCategorySelect] = useState([]);
  let categorySelectedArray = [];

  const currentBtn = useRef();

  useEffect(() => {
    if (category) {
      let categoryLeft = categoryContext.filter(
        (x) => !props.giveCategoryData.filter((y) => y.id === x.id).length
      );
      setCategoryRemain(categoryLeft);
    }
  }, [props.giveCategoryData]);

  useEffect(() => {
    currentBtn.current = categoryRemain.map(
      (item, index) => currentBtn.current[index] ?? createRef()
    );
    console.log(categoryRemain);
  }, [categoryRemain]);

  const SaveCategory = () => {
    props.onHide();

    let categoryCopy = [...category];
    categoryCopy.push(...categorySelectedArray);
    // console.log(categoryCopy)

    props.getCategoryData(categoryCopy);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      centered
      dialogClassName="modal2 "
    >
      <Modal.Header closeButton>
        <Modal.Title>Select columns</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="w-50 mx-auto">
          {categoryRemain.map((item, index) => {
            return (
              <Row className="     my-2" key={index}>
                <Button
                  ref={currentBtn.current[index]}
                  variant="outline-secondary"
                  className="w-100 h-100 text-dark border-1 "
                  onClick={() => {
                    if (!categorySelectedArray.includes(item)) {
                      categorySelectedArray.push(item);
                      currentBtn.current[index].current.classList.add(
                        "bg-primary"
                      );
                      currentBtn.current[index].current.classList.add(
                        "border-primary"
                      );
                    } else {
                      categorySelectedArray.splice(
                        categorySelectedArray.indexOf(item),
                        1
                      );
                      currentBtn.current[index].current.classList.remove(
                        "bg-primary"
                      );
                      currentBtn.current[index].current.classList.remove(
                        "border-primary"
                      );
                    }
                  }}
                >
                  <p className=" mb-0 prevent-select">{item.name}</p>
                </Button>
              </Row>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button className="w-25" onClick={SaveCategory}>
          Add
        </Button>
        <Button
          variant="outline-secondary"
          className="w-25"
          onClick={props.onHide}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
