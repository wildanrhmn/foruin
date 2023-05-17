import React from 'react'
import Form from 'react-bootstrap/Form';
import Styles from '../../styles/FormLayout.module.css';

const DetailAdmin = ({ banned, reported, submission, data }) => {
  return (
    <section className='detail-section'>
        <div className='container'>

            <div style={{paddingTop: '150px'}}>
                <div style={{paddingBottom: '30px', paddingLeft: '50px'}}>
                    <h3 style={{fontWeight: '600', fontSize: '1.2rem', color: '#2F2F2F'}}>
                        {banned ? 'Detail of Banned Account' 
                        : reported ? 'Detail of Reported Account' 
                        : submission ? 'Detail of Submission' 
                        : ''}
                        </h3>
                </div>
                <div className={Styles.formDetailed}>
                    <div className={Styles.formDetailedItems}>
                        <div className={Styles.formDetailedItem}>
                            <h5>Name</h5>
                            <Form.Control type="text" value={data.name} style={{fontWeight: '600'}} />
                        </div>
                        <div className={Styles.formDetailedItem}>
                            <h5>Username</h5>
                            <Form.Control type="text" value={data.username} style={{fontWeight: '600'}} />
                        </div>
                        {(banned || reported) && (
                            <>
                                <div className={Styles.formDetailedItem}>
                                    <h5>
                                        {banned ? 'Banned By' : reported ? 'Reported By' : ''}
                                    </h5>
                                    <Form.Control type="text" value={data.admin_name} style={{fontWeight: '600'}} />
                                </div>
                                <div className={Styles.formDetailedItem}>
                                    <h5>Category</h5>
                                    <Form.Control type="text" value={data.category} style={{fontWeight: '600'}} />
                                </div>
                            </>
                        )}
                        {
                            submission && (
                                <>
                                    <div className={Styles.formDetailedItem}>
                                        <h5>
                                            Email
                                        </h5>
                                        <Form.Control type="email" value={data.email} style={{fontWeight: '600'}} />
                                    </div>
                                    <div className={Styles.formDetailedItem}>
                                        <h5>
                                            Status
                                        </h5>
                                        <Form.Control type="text" value={data.status} style={{fontWeight: '600'}} />
                                    </div>
                                    <div className={Styles.formDetailedItem}>
                                        <h5>
                                            Attachment
                                        </h5>
                                        <Form.Control type="file"  style={{fontWeight: '600'}} />
                                    </div>
                                </>
                            )
                        }
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                            <button className={Styles.btnDetailed}>Accept</button>
                            <button className={Styles.btnDetailed}>Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailAdmin