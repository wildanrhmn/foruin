import React from 'react'
import Posts from '../../components/posts/Posts';
import AsideProfile from '../../components/profile/AsideProfile';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";



const Profile = () => {

    const isLarge = useMediaQuery({
        query: "(max-width: 1400px)",
    });

    const { posts = [] } = useSelector(states => states);
    console.info(posts)

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className={`${isLarge ? "col-lg-3" : "col-lg-3"}`}>
                    <AsideProfile />
                </div>

                <div className={`${isLarge ? "col-lg-9" : "col-lg-9"}`}>
                    {posts && posts?.map(post => (
                        <>
                            <Posts
                                _id={post.id}
                                profilePic={post.profile_picture?.url}
                                name={post.display_name}
                                username={post.username}
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