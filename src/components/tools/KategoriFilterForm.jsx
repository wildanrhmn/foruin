/* eslint-disable react-hooks/exhaustive-deps */
import { Row, Col, InputGroup, Form } from "react-bootstrap"
import { useState, useEffect } from 'react'
// import api from '../utils/api'

import { ReactComponent as ArrowOrgDown } from '../../assets/icons/Expand_down.svg'


import Styles from '../../styles/FormLayout.module.css'

export default function KategoriFilterForm({ setData, currentData }) {
    const [expand, setExpand] = useState(false)
    // eslint-disable-next-line
    const [listKategori, setlistKategori] = useState([])
    const [dynamicKategori, setDynamicKategori] = useState('')
    const [kategoriBerita, setKategoriBerita] = useState(currentData || [])

    function addKategori(newKategori) {
        let pre = [...kategoriBerita]
        if (kategoriBerita.length === 0) {
            pre.push(newKategori)
        } else {
            if (!kategoriBerita.includes(newKategori)) {
                pre.push(newKategori)
            }
        }

        setKategoriBerita(pre)
    }

    function addNewKategori() {
        let pre = [...kategoriBerita]
        if (kategoriBerita.length === 0) {
            pre.push(dynamicKategori)
        } else {
            if (!kategoriBerita.includes(dynamicKategori)) {
                pre.push(dynamicKategori)
            }
        }
        setDynamicKategori('')
        setKategoriBerita(pre)
    }

    function deleteKategori(selectedKategori) {
        const pre = kategoriBerita.filter(item => item !== selectedKategori)
        setKategoriBerita(pre)
    }

    // async function getListKategori() {
    //     const data = await api.GetKategori()
    //     setlistKategori(data)
    // }

    useEffect(() => {
        setData(kategoriBerita)
    }, [kategoriBerita])

    // useEffect(() => {
    //     getListKategori()
    // }, [])

    return (
        <div className={Styles.filterCategory}>
            <div className={Styles.filterHeader}>
                {kategoriBerita.length === 0
                    ? (<div className={Styles.filterHeaderButton} onClick={() => setExpand(!expand)}>
                        <span>Choose Kategori</span>
                        <ArrowOrgDown className={Styles.arrowKategori} />
                    </div>)
                    : (<div className={Styles.filterHeaderButton}>
                        <div className={Styles.filterItemContainer}>
                            {kategoriBerita.map(item =>
                                <span className={Styles.filterItem}>
                                    {item}
                                    <button type="button" onClick={() => deleteKategori(item)}>X</button>
                                </span>)
                            }
                        </div>
                        <div onClick={() => setExpand(!expand)}>
                            <ArrowOrgDown className={Styles.arrowKategori} />
                        </div>
                    </div>)}
            </div>
            <div className={`${Styles.filterBody} ${expand && Styles.showed}`}>
                <Row>
                    <InputGroup className={Styles.kategoriDynamicForm}>
                        <button onClick={() => addNewKategori()} type="button">+</button>
                        <Form.Control style={{ fontSize: "10px" }} value={dynamicKategori} onChange={(e) => setDynamicKategori(e.target.value)} placeholder="New Kategori" />
                    </InputGroup>
                    <Col>
                        <ul>
                            {listKategori.map((kategori, index) => (
                                <>
                                    {index % 2 === 0 && (
                                        <li>
                                            <button onClick={() => addKategori(kategori)} type="button">+</button>
                                            {kategori}
                                        </li>
                                    )}
                                </>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            {listKategori.map((kategori, index) => (
                                <>
                                    {index % 2 !== 0 && (
                                        <li>
                                            <button onClick={() => addKategori(kategori)} type="button">+</button>
                                            {kategori}
                                        </li>
                                    )}
                                </>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}