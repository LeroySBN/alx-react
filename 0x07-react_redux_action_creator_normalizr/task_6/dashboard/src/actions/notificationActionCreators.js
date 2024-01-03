import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index
    }
}

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter
    }
}

const dispatch = useDispatch();
const boundMarkAsAread = bindActionCreators(markAsAread, dispatch);
const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, dispatch);
