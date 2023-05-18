import React from 'react'
import Form from 'react-bootstrap/Form';
import Styles from '../../styles/FormLayout.module.css';
import { useLocation } from 'react-router-dom';

const DetailAdmin = ({ banned, reported, submission, data }) => {
    const location = useLocation();
  return (
    <section className='detail-section'>
        <div className='container'>

            <div style={location.pathname.includes('/detail-submission') ? {paddingTop: '100px'} : {paddingTop: '150px'}}>
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
                            <Form.Control disabled type="text" value={data?.name} style={{fontWeight: '600', border: '1px solid #C9CBFF'}} />
                        </div>
                        <div className={Styles.formDetailedItem}>
                            <h5>Username</h5>
                            <Form.Control disabled type="text" value={data?.organization} style={{fontWeight: '600', border: '1px solid #C9CBFF'}} />
                        </div>
                        {(banned || reported) && (
                            <>
                                <div className={Styles.formDetailedItem}>
                                    <h5>
                                        {banned ? 'Banned By' : reported ? 'Reported By' : ''}
                                    </h5>
                                    <Form.Control disabled type="text" value={data.admin_name} style={{fontWeight: '600', border: '1px solid #C9CBFF'}} />
                                </div>
                                <div className={Styles.formDetailedItem}>
                                    <h5>Category</h5>
                                    <Form.Control disabled type="text" value={data.category} style={{fontWeight: '600', border: '1px solid #C9CBFF'}} />
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
                                        <Form.Control disabled type="email" value={data?.email} style={{fontWeight: '600', border: '1px solid #C9CBFF'}} />
                                    </div>
                                    <div className={Styles.formDetailedItem}>
                                        <h5>
                                            Status
                                        </h5>
                                        <Form.Control disabled type="text" value={data?.status} style={{fontWeight: '600', border: '1px solid #C9CBFF'}} />
                                    </div>
                                    <div className={Styles.formDetailedItem}>
                                        <h5>
                                            Attachment
                                        </h5>
                                        <ul className={Styles.attachmentsList}>
                                            {data ?
                                                <>
                                                    {data?.attachments.map((attachment, index) => (
                                                        <>
                                                        <li key={index} style={{paddingBottom: '10px'}}>
                                                            <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                                                                Bukti Organisasi
                                                            </a>
                                                        </li>
                                                        </>
                                                    ))}
                                                </>
                                             : 
                                             <>
                                                <li>No Attachment</li>
                                             </>
                                             }
                                        </ul>
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