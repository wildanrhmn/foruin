import React from 'react'
import DetailAdmin from '../../../components/admin_details/DetailPage';
import { dataDetailSubs } from '../../../utils/DummyData';

const DetailSubmission = () => {
  return (
    <DetailAdmin submission data={dataDetailSubs} />
  )
}

export default DetailSubmission