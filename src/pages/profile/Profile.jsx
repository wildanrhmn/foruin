import React, { useEffect } from 'react'
import Posts from '../../components/posts/Posts';
import AsideProfile from '../../components/profile/AsideProfile';

import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { AsyncGetDetailProfile } from '../../state/profile/middleware';



const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { profile = {} } = useSelector(states => states);
    const isLarge = useMediaQuery({
        query: "(max-width: 1400px)",
    });
    useEffect(() => {
        dispatch(AsyncGetDetailProfile(id));
    }, [id, dispatch])
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className={`${isLarge ? "col-lg-3" : "col-lg-3"}`} style={profile.posts?.length !== 0 ? {padding: 0, borderRight: '1px solid #EBEBEB'} : {padding: 0, borderRight: '1px solid #EBEBEB', height: '100vh'}}>
                <AsideProfile data={profile} />
                </div>
                <div className={`${isLarge ? "col-lg-9" : "col-lg-9"}`}>
                    {profile && profile.posts?.map((post) => (
                        <>
                            <Posts
                                _id={post._id}
                                id_user={post.created_by}
                                profilePic={profile.profile_picture.url}
                                name={profile.username}
                                username={profile.display_name}
                                imageSrc={post.attachments}
                                description={post.body}
                                category={post.category}
                                totalLikes={post.likes.length}
                                totalComments={post.discussion.length}
                                likes={post.likes}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile