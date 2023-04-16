import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Styles from '../../styles/FormLayout.module.css'

function ModalPostComment(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="text-center">New Comment</Modal.Title>
        <span onClick={props.onHide} style={{cursor: 'pointer'}}>X</span>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} className={Styles.textAreaComment} onChange={props.setValue}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleSubmit} className={Styles.formSubmitComment}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPostComment;
