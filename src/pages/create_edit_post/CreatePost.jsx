import React from 'react'

import Styles from '../../styles/posts/CreatePost.module.css'
import FormAddPost from '../../components/posts/FormAddPost'

const CreatePost = () => {

  return (
    <section className={Styles.createPostSection}>
        <div className='container'>
            <h1 className={Styles.pageHeader}>Create Post</h1>
            <div className={Styles.addPostContainer}>
            <FormAddPost showForm={true} />
            </div>
        </div>
    </section>
  )
}

export default CreatePost