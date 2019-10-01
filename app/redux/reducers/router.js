import { ActionConst } from 'react-native-router-flux';


const DEFAULT_STATES = {
    topScene: {},
};

export default function routerReducer(state = DEFAULT_STATES, action) {
    const { type } = action;

    if (type === ActionConst.FOCUS)
        return { ...state, topScene: action.scene };


    return state;
}