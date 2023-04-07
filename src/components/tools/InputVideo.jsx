import { Form } from 'react-bootstrap'
import { useState, useRef, useEffect } from 'react'

import { ReactComponent as FileOrg } from '../../assets/icons/file-org.svg'
import { ReactComponent as Delete } from '../../assets/icons/Delete.svg'

import Styles from '../../styles/FormLayout.module.css'

export default function InputVideo({ getData, label, currentData }) {
    const [showImage, setShowImage] = useState(currentData?.detail || currentData || null)

    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const addImageButton = () => {
        fileInputRef.current.click();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file !== undefined) {
            handleFile(file)
        }
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file !== undefined) {
            handleFile(file)
        }
    };

    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = function () {
            const { result } = reader;
            const detail = {
                src: result,
                name: file.name,
            };
            setShowImage(detail);
            getData({
                file,
                detail,
            })
        };
        reader.readAsDataURL(file);
    }

    function deleteImage() {
        setShowImage(null);
    }

    useEffect(() => {
        setShowImage(currentData?.detail || currentData || null)
    }, [currentData])

    return (
        <Form.Group>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={Styles.formVideo}
            >
                <Form.Label className={Styles.textOrg}>{label}{' '}<span className={Styles.required}>*</span></Form.Label>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />
                {showImage !== null ? (
                    <div className={Styles.videoDisplayCard}>
                        <FileOrg />
                        <span>
                            {showImage?.name || showImage}
                        </span>
                        <button onClick={() => deleteImage()}>
                            <Delete />
                        </button>
                    </div>
                ) : (
                    <div className={Styles.nonVideoDisplayCard} onClick={addImageButton}>
                        <span>Drag n Drop here</span>
                        <span>Or</span>
                        <span className={Styles.textBrowse}>Browse</span>
                    </div>
                )}
                <button type="button" className={Styles.formVideoButton} onClick={addImageButton}>Select file</button>
            </div>
        </Form.Group>
    )
}