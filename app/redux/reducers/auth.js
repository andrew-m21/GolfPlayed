import { AUTH } from '../types';

const DEFAULT_STATES = {

    user: null,
};

export default function authReducer(state = DEFAULT_STATES, action) {
    const { type } = action;

    if (type === AUTH.AUTHORIZE) {
        const { payload } = action;
        return { ...state, user: payload };
    }


    if (type === AUTH.DEAUTHORIZE)
        return { ...state, user: null };

    return state;
}
