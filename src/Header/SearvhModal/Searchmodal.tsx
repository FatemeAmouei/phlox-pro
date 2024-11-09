import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./searchmodal.css";
import { CiSearch } from "react-icons/ci";

interface SearchModalProps {
  show: boolean;
  onHide: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ show, onHide }) => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState<
    true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down"
  >(true);

  const handleShow = (breakpoint: any) => {
    setFullscreen(breakpoint);
  };

  return (
    <Modal
      show={show}
      fullscreen={fullscreen}
      onHide={onHide}
      className="searchmodal-container"
    >
      <Modal.Header closeButton>
        <Form.Group
          className="mb-3 searchmodal-input-container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="به دنبال چه هستید؟"
            className="searchmodal-input"
          />
          <Button variant="outline-secondary" className="searchmodal-button">
            <CiSearch className="searchmodal-icon" />
          </Button>
        </Form.Group>{" "}
      </Modal.Header>
      <Modal.Body> </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
