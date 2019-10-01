

import { Reducer } from 'react-native-router-flux';

// Constants
//import { DEBUGS } from '../Constants/Flags';

// Utils
//import Logger from 'app/utils/Logger';

export default function createReducer(params) {
  const defaultReducer = new Reducer(params);
  return (state, action) => {

      const { sceneKey } = action.scene || {};
     // Logger.debug('[Router]', sceneKey == null ? '' : `sceneKey: ${sceneKey}`, action);


    return defaultReducer(state, action);
  };
}
