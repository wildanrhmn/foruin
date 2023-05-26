import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AsyncUpdatePost } from "../../state/posts/middleware";

import KategoriFilterForm from "../tools/KategoriFilterForm";
import InputVideo from "../tools/InputVideo";
import InputManyImage from "../tools/InputManyImage";
import Editor from "../tools/Editor";

import Styles from "../../styles/FormLayout.module.css";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export default function FormEditPost({ showForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postData = JSON.parse(localStorage.getItem('postData'));
  const filteredDataVideo = postData.imageSrc.filter(item => item.url?.endsWith('.mp4'));
  const filteredDataImage = postData.imageSrc.filter(item => item.url?.endsWith('.jpg') || item.url?.endsWith('.png') || item.url?.endsWith('.webp'));
  const [uploadedVideo, setUploadedVideo] = useState(filteredDataVideo || null);
  const [gambarPost, setGambarPost] = useState(filteredDataImage || []);
  const [kategoriPost, setKategoriPost] = useState(JSON.parse(postData?.category) || []);
  const [isiPost, setIsiPost] = useState(postData?.description || '');
  function handleChangePost(e){
    e.preventDefault();
    if(postData !== null){
      try{
        dispatch(AsyncUpdatePost({
          _id: postData._id,
          kategori_berita: kategoriPost || postData?.category,
          isi_post:  isiPost || postData?.description,
          video_berita: uploadedVideo,
          gambar_post: gambarPost,
        }))
        Swal.fire({
          icon: 'success',
          title: 'Successfully Updated!',
          text: 'Your update may take a while to show up.',
          showConfirmButton: false,
          timer: 3000
        }).then(() => {
          navigate('/');
        })
      } catch (err){
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Cannot Post!',
          text: 'Please make sure you are putting the correct inputs.',
          showConfirmButton: false,
          timer: 3000
        })
      }
      showForm(false)  
    }
  } 
  return (
    <Form onSubmit={handleChangePost}>
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
          Edit
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
