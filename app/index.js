import Home from './components/index';
import React, {Component} from 'react';
import {Navigator, view} from 'react-native';

class Index extends Component {
    render() {
        return <Navigator
            initialRoute={{name: 'Home', component: Home}}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
            }} />;
    }
}

export default Index;