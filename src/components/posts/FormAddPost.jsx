import { Form } from "react-bootstrap";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   AsyncCreateBerita,
//   AsyncEditBerita,
// } from "../../state/berita/middleware";
// import InfoModal from "../InfoModal";
// import CTAModal from "../CTAModal";

import KategoriFilterForm from "../tools/KategoriFilterForm";
import InputVideo from "../tools/InputVideo";
import InputManyImage from "../tools/InputManyImage";
import Editor from "../tools/Editor";

import Styles from "../../styles/FormLayout.module.css";

export default function FormAddPost({ showForm, currentData }) {
  // const dispatch = useDispatch();
  const [uploadedVideo, setUploadedVideo] = useState(currentData?.video_url || null);
  const [kategoriPost, setKategoriPost] = useState(currentData?.category || []);
  const [isiPost, setIsiPost] = useState(currentData?.body || '');
  const [linkPost, setLinkPost] = useState(currentData?.links || '');
  const [gambarPost, setGambarPost] = useState(currentData?.gambar_post?.url || null);

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
          getData={gambarPost}
          label="Upload Gambar Post Max. 4 *"
          currentData={setGambarPost}
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
      <Form.Group className="mt-3">
        <Form.Label style={{fontWeight: '600', fontSize: '20px'}}>
          Link{' '}<span style={{fontSize: '12px', fontStyle: 'italic'}} className={Styles.required}>optional</span>
        </Form.Label>
        <Form.Control
          placeholder="https://"
          value={linkPost}
          onChange={(e) => setLinkPost(e.target.value)}
          className={Styles.formInputLink}
        />
      </Form.Group>
      <div className={`${Styles.formCta} gap-3 d-flex justify-content-center`}>
        {/* <button
          onClick={() => setMakeDraft(true)}
          className="form-cancel-button"
          type="button"
        >
          Hapus
        </button> */}
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
      {/* <CTAModal
        show={makeDraft}
        setShow={setMakeDraft}
        value="Are you sure to delete this Article?"
        action1={showForm}
        action2={handleCreateDraft}
      /> */}
    </Form>
  );
}
