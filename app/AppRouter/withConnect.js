import { connect } from 'react-redux';
import { Router, Switch } from 'react-native-router-flux';
//import { auth } from 'app/redux/actions';

// Constants
import { FEATURES } from '../Constant/Flags';

function mapStateToProps(state) {

    return {  };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

//export const AppSwitcher = connect(mapStateToProps)(Switch);
export const ReduxRouter =  Router;

export default function withConnect(WrappedComponent) {

    return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
