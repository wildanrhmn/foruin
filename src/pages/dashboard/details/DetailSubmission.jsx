import React, {useEffect} from 'react'
import DetailAdmin from '../../../components/admin_details/DetailPage';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncAdminGetDetailSubmission } from '../../../state/detailSubmission/middleware';

const DetailSubmission = () => {
  const dispatch = useDispatch();
  const { detailSubmission = {} } = useSelector((states) => states);
  const { id } = useParams();

  useEffect(() => {
    dispatch(AsyncAdminGetDetailSubmission(id));
  }, [dispatch, id]);
  return (
    <>
      <DetailAdmin submission data={detailSubmission} />
    </>
  )
}

export default DetailSubmission