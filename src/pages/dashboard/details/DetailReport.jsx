import React from 'react'
import DetailAdmin from '../../../components/admin_details/DetailPage';
import { dataBannedAccount } from '../../../utils/DummyData';

const DetailReport = () => {
  return (
    <DetailAdmin reported data={dataBannedAccount} />
  )
}

export default DetailReport