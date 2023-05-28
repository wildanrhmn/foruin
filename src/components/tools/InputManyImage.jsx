import { Form } from 'react-bootstrap'
import { useState, useRef, useEffect } from 'react'

import { ReactComponent as FileOrg } from '../../assets/icons/Img_box_light.svg'
import { ReactComponent as Delete } from '../../assets/icons/Delete.svg'

import Styles from '../../styles/FormLayout.module.css'

export default function InputManyImage({ getData, currentData }) {
    const [showImage, setShowImage] = useState(currentData?.detail || currentData || [])
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
        if(showImage.length >= 4){
            alert('Maksimal hanya 4 gambar.');
            return;
        }
        if(file && file.size > 6 * 1024 * 1024){ // 5MB in bytes
            alert('Maximun size allowed is 5MB');
            return;
        }
        const reader = new FileReader();
        reader.onload = function () {
            const { result } = reader;
            const detail = {
                src: result,
                name: file.name,
                file: file
            };
            setShowImage([...showImage, detail]);
            getData([
                ...showImage,
                file
            ])
        };
        reader.readAsDataURL(file);
    }

    function deleteImage(index) {
        const deleted = showImage.filter((image, idx) => index !== idx)
        setShowImage(deleted);
        getData(deleted ? deleted : null)
    }

    useEffect(() => {
        setShowImage(currentData?.detail || currentData || null)
    }, [currentData])
    
    return (
        <Form.Group>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={Styles.formImage}
            >
                <Form.Label className={Styles.textOrg}>Upload Image{' '}<span style={{fontSize: '12px'}}>Max. 4</span>{' '}<span className={Styles.required}>*</span></Form.Label>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    accept='image/*'
                />
                {showImage?.length > 0 ? (
                    <>
                        {showImage?.map((image, index) => (
                            <div className={Styles.imageDisplayCard}>
                                <FileOrg width={30} />
                                <span style={{fontSize: '14px'}}>
                                    {image.url || image.name || image}
                                </span>
                                <button onClick={() => deleteImage(index)} type='button'>
                                    <Delete className={Styles.deleteIcon} />
                                </button>
                            </div>
                        ))}
                    </>

                ) : (
                    <div className={Styles.nonImageDisplayCard} onClick={addImageButton}>
                        <span>Drag n Drop here</span>
                        <span>Or</span>
                        <span className={Styles.textBrowse}>Browse</span>
                    </div>
                )}
                <button type="button" className={Styles.formImageButton} onClick={addImageButton}>Select file</button>
            </div>
        </Form.Group>
    )
}