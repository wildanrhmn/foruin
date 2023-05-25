import { GetDiscussionAction } from "./action";
import { GetDetailDiscussionAction } from '../detailDiscussion/action'
import api from "../../utils/api";

function AsyncGetDiscussionLayer(page = 1, id_layer) {
    return async dispatch => {
        try {
            const data = await api.GetAllDiscussionLayer(page, id_layer);
            dispatch(GetDiscussionAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncGetDiscussionTopic(page = 1, id_topic) {
    return async dispatch => {
        try {
            const data = await api.GetAllDiscussionTopic(page, id_topic);
            dispatch(GetDiscussionAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncCreateDiscussion(data, id_topic) {
    return async () => {
        try {
            if (data.body === "") {
                throw new Error()
            }

            const result = await api.CreateDiscussion(data, id_topic);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUpdateDiscussion(id = null, data) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.EditDiscussion(id, data);

            if (result.info !== undefined) {
                throw new Error()
            }

            const detail = await api.GetDetailDiscussion(id);

            if (detail._id !== undefined) {
                throw new Error()
            }

            dispatch(GetDetailDiscussionAction(detail))
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncAdminTakedownDiscussion(id = null) {
    return async () => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.TakedownDiscussionAdmin(id);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUserTakedownDiscussion(id = null) {
    return async () => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.TakedownDiscussionUser(id);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetDiscussionLayer, AsyncGetDiscussionTopic, AsyncCreateDiscussion, AsyncUpdateDiscussion, AsyncAdminTakedownDiscussion, AsyncUserTakedownDiscussion }