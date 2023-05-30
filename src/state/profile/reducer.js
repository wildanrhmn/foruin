import { ActionType } from "./action"

export default function ProfileReducer(profile = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_PROFILE:
            return profile = action.payload.details
        case ActionType.LIKE_UNLIKE_PROFILE_POST:
            const id_user = action.payload.id_user;
            const id_post = action.payload.id_post;
            const selected_post = profile.posts?.find((post) => post._id === id_post);    

            if(!selected_post){
                return profile
            }
            const likes = [...selected_post.likes];
            const index = likes.indexOf(id_user);

            if (index === -1) {
                likes.push(id_user);
            } else {
                likes.splice(index, 1);
            }

           const updatedPosts = profile.posts.map((post) => {
               if(post._id === id_post){
                   return {...post, likes};
               } else {
                return post
               }
           })   

           return {...profile, posts: updatedPosts}
        default:
            return profile
    }
}
