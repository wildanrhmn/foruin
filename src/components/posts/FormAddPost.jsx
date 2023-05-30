import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AsyncCreatePost } from "../../state/posts/middleware";

import KategoriFilterForm from "../tools/KategoriFilterForm";
import InputVideo from "../tools/InputVideo";
import InputManyImage from "../tools/InputManyImage";
import Editor from "../tools/Editor";

import Styles from "../../styles/FormLayout.module.css";
export default function FormAddPost({ showForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [gambarPost, setGambarPost] = useState([]);
  const [kategoriPost, setKategoriPost] = useState([]);
  const [isiPost, setIsiPost] = useState('');

  const handleAddPost = (e) => {
    e.preventDefault();
    try{
      dispatch(AsyncCreatePost({uploadedVideo, gambarPost, kategoriPost, isiPost}));
    } catch(err){
      console.log(err);
    }
  }
  return (
    <Form onSubmit={handleAddPost}>
      <Form.Group>
        <InputVideo
          getData={setUploadedVideo}
          label="Upload Video"
          currentData={uploadedVideo}
        />
      </Form.Group>
      <Form.Group>
        <InputManyImage
          getData={setGambarPost}
          label="Upload Gambar Post Max. 4 *"
          currentData={gambarPost}
        />
      </Form.Group>
      <Form.Group>
                <Form.Label style={{fontWeight: '600', fontSize: '20px'}}>Category of Topics{' '}<span className={Styles.required}>*</span></Form.Label>
                <KategoriFilterForm currentData={kategoriPost} setData={setKategoriPost} />
            </Form.Group>
            <Form.Group>
                <Form.Label style={{fontWeight: '600', fontSize: '20px'}}>Teks{' '}<span className={Styles.required}>*</span></Form.Label>
                <Editor defaultData={isiPost} setData={setIsiPost} />
            </Form.Group>
      <div className={`${Styles.formCta} gap-3 d-flex justify-content-flex-end `} style={{padding: '50px'}}>
      <button className={Styles.formCancelButton} onClick={() => navigate('/')}> 
          Cancel
        </button>
        <button className={Styles.formSubmitButton} type="submit">
          Upload
        </button>
      </div>
      {/* Error Modal */}
      {/* <InfoModal
        show={error}
        setShow={setError}
        value="Error! Image Cannot Empty"
        type="error"
      /> */}
      {/* Success Draft Modal */}
      {/* <InfoModal
        show={successDraft}
        setShow={setSuccessDraft}
        value="Draft has been created"
        type="draft"
      /> */}
      {/* CTA Modal */}
    </Form>
  );
}
