import { Form } from "react-bootstrap";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   AsyncCreateBerita,
//   AsyncEditBerita,
// } from "../../state/berita/middleware";
// import InfoModal from "../InfoModal";

import KategoriFilterForm from "../tools/KategoriFilterForm";
import InputVideo from "../tools/InputVideo";
import InputManyImage from "../tools/InputManyImage";
import Editor from "../tools/Editor";

import Styles from "../../styles/FormLayout.module.css";
export default function FormAddPost({ showForm }) {
  // const dispatch = useDispatch();
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [gambarPost, setGambarPost] = useState([]);
  const [kategoriPost, setKategoriPost] = useState([]);
  const [isiPost, setIsiPost] = useState('');

  // const [error, setError] = useState(false);

//   const timestamp = new Date(Date.now());

  // function handleManageBerita(e) {
  //   e.preventDefault();
  //   if (currentData !== null){
  //       dispatch(AsyncEditBerita({
  //         _id: currentData._id,
  //         video_berita: uploadedVideo || currentData?.video_url,
  //         kategori_berita: kategoriBerita,
  //         isi_post: isiPost,
  //         gambar_post: gambarPost || currentData?.gambar_post.url,
  //         link_post: linkPost,
  //       }))
  //       showForm(false)
  //   } else {
  //       if (gambarPost !== null && uploadedVideo !== null) {
  //         dispatch(
  //           AsyncCreateBerita({
  //             video_berita: uploadedVideo,
  //             kategori_berita: kategoriBerita,
  //             isi_post: isiPost,
  //             gambar_post: gambarPost,
  //             link_post: linkPost,
  //           }));
  //           showForm(false)
  //       } else {
  //         setError(true);
  //       }
  //   }
  // }

  return (
    <Form>
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
