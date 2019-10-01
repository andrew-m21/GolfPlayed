import AppRouter from './AppRouter/index';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store/index'
console.disableYellowBox = true;
class App extends React.Component {
    componentDidMount() {

    }

    render() {
        const AppCore =  AppRouter;

        return (

            <Provider store={store}>
                <View style={styles.rootView}>
                    <StatusBar backgroundColor="white"
                               translucent barStyle="light-content" />
                    <AppCore />
                </View>
            </Provider>
        );
    }
}

const styles = {
    rootView: {
        flex: 1,
    },
};

export default App;
