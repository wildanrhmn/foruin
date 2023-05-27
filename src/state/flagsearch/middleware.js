import { SetFlagSearch } from "./action";

function AsyncSetFlagingSearch(value) {
    return async dispatch => {
        try {
            if(value === null || value === "") {
                dispatch(SetFlagSearch(false, value));
            }
            else{
                dispatch(SetFlagSearch(true, value));
            }
        } catch (err) {
            console.error(err);
        }
    }
}
export { AsyncSetFlagingSearch }