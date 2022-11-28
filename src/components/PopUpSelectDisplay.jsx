import React, { useContext, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { PopUpSelectCol } from "./PopUpSelectCol";
import { Modal, Button, Col, Row } from "react-bootstrap";
import { MdOutlineDragIndicator } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { SavedCategoryContext } from "./Main";

export const PopUpSelectDisplay = (props) => {
  const [popUpColOpen, setPopUpColOpen] = useState(false);

  const { category, setCategory } = useContext(SavedCategoryContext);

  const [categoryAfterDrag, setCategoryAfterDrag] = useState(category);
  const [canDrag, setCanDrag] = useState(false);
  const [tempCategoryData, setTempCategoryData] = useState(category);

  useEffect(() => {
    setCanDrag(false);
  }, [tempCategoryData]);

  useEffect(() => {
    setCategoryAfterDrag(tempCategoryData);
  }, [tempCategoryData]);

  function HandleOnDragEnd(result) {
    if (!result.destination) {
      return;
    }
    setCanDrag(true);
    const items = Array.from(categoryAfterDrag);
    const [reOrderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reOrderedItem);

    setTempCategoryData(items);
  }
  function HandleDeleteItem(item) {
    let categoryCopy = [...categoryAfterDrag];
    categoryCopy.pop(item);

    setTempCategoryData(categoryCopy);
  }

  return (
    <div>
      <PopUpSelectCol
        addCategory={() => {
          console.log("fuck");
        }}
        show={popUpColOpen}
        onHide={() => setPopUpColOpen(false)}
        getCategoryData={(data) => setTempCategoryData(data)}
        giveCategoryData={tempCategoryData}
      />

      <Modal
        show={props.show}
        onHide={props.onHide}
        centered
        dialogClassName="modal1 "
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="m-0">Select the field to display</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="mx-auto w-50">Column info</h6>

          <DragDropContext onDragEnd={HandleOnDragEnd}>
            <Droppable droppableId="category">
              {(provided) => (
                <div
                  className="w-50 mx-auto"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {categoryAfterDrag.map((item, index) => {
                    return (
                      <Draggable
                        key={item.name}
                        draggableId={item.name}
                        index={index}
                        isDragDisabled={canDrag}
                      >
                        {(provided) => (
                          <Row
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="  border-1 rounded border border-dark border-opacity-50 p-2 mb-2"
                          >
                            <div
                              className="d-flex justify-content-center align-items-center "
                              style={{ width: "20px" }}
                            >
                              <MdOutlineDragIndicator className="iconSmall" />
                            </div>
                            <Col>
                              <p className=" mb-0 prevent-select">
                                {item.name}
                              </p>
                            </Col>
                            <div
                              className="d-flex justify-content-center align-items-center "
                              style={{ width: "20px" }}
                            >
                              <ImCross
                                className="iconSmaller"
                                onClick={HandleDeleteItem}
                              />
                            </div>
                          </Row>
                        )}
                      </Draggable>
                    );
                  })}

                  {provided.placeholder}
                  <Row className="   rounded border-dotted border-dark border-opacity-50  my-2">
                    <Button
                      variant="outline-secondary"
                      className="w-100 h-100 bg-transparent text-dark border-0 "
                      onClick={() => {
                        setPopUpColOpen(true);
                      }}
                    >
                      <p className=" mb-0 text-center">+ Add field</p>
                    </Button>
                  </Row>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            className="w-25"
            onClick={() => {
              props.onHide();
              setCategory(tempCategoryData);
            }}
          >
            Save
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
    </div>
  );
};
