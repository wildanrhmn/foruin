import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Styles from '../../styles/posts/CreatePost.module.css'
import FormEditPost from '../../components/posts/FormEditPost'

const EditPost = () => {

    const location = useLocation();

    useEffect(() => {
        if(!location.pathname.includes('/update-post/')){
            localStorage.removeItem('postData')
        }
    }, [location])
  return (
    <section className={Styles.createPostSection}>
        <div className='container'>
            <h1 className={Styles.pageHeader}>Edit Post</h1>
            <div className={Styles.addPostContainer}>
            <FormEditPost showForm={true} />
            </div>
        </div>
    </section>
  )
}

export default EditPost