import React from 'react'
import DetailAdmin from '../../../components/admin_details/DetailPage';
import { dataDetailBanned } from '../../../utils/DummyData';

const DetailBanned = () => {
  return (
    <DetailAdmin banned data={dataDetailBanned} />
  )
}

export default DetailBanned