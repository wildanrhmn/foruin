import { ActionType } from "./action"

export default function PostReducer(posts = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_POSTS:
            return posts = action.payload.posts
        case ActionType.LIKE_UNLIKE_POST:
            const id_user = action.payload.id_user
            console.info(id_user, "wkwkwk")
            const id_post = action.payload.id_post
            const selected_post = posts.filter(post => post.id === id_post)[0]
            const likes = selected_post.likes
            
            const index = likes.indexOf(id_user)
            
            if(index === -1){
                likes.push(id_user)
            }else{
                likes.splice(index,1)
            }
            
            const new_selected_post = {...selected_post, likes}
            
            return posts = posts.map(post => {
                if(post.id === id_post){
                    return post
                }else{
                    return new_selected_post
                }
            })
        default:
            return posts
    }
}