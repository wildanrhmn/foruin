import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncUpdatePost } from "../../state/posts/middleware";

import KategoriFilterForm from "../tools/KategoriFilterForm";
import InputVideo from "../tools/InputVideo";
import InputManyImage from "../tools/InputManyImage";
import Editor from "../tools/Editor";

import Styles from "../../styles/FormLayout.module.css";

export default function FormEditPost({ showForm }) {
  const dispatch = useDispatch();
  const postData = JSON.parse(localStorage.getItem('postData'));
  const filteredDataVideo = postData.imageSrc.filter(item => item.type === 'video');
  const filteredDataImage = postData.imageSrc.filter(item => item.type === 'image').map(data => data.src);
  const [uploadedVideo, setUploadedVideo] = useState(filteredDataVideo[0].src || null);
  const [gambarPost, setGambarPost] = useState(filteredDataImage || []);
  const [kategoriPost, setKategoriPost] = useState(postData?.category || []);
  const [isiPost, setIsiPost] = useState(postData?.description || '');

  function handleChangePost(e){
    e.preventDefault();
    if(postData !== null){
      dispatch(AsyncUpdatePost({
        _id: postData._id,
        kategori_berita: kategoriPost || postData?.category,
        isi_post:  isiPost || postData?.description,
        video_berita: uploadedVideo || postData?.video_url,
        gambar_post: gambarPost || postData?.gambar_post.url,
      }))
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
      <div className={`${Styles.formCta} gap-3 d-flex justify-content-center`}>
        <button className={Styles.formSubmitButton} type="submit">
          Simpan
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
