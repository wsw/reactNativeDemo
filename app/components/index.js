import React, {Component} from 'react';
import {StyleSheet, Text, DrawerLayoutAndroid,
    TouchableHighlight, Dimensions, ScrollView,
    BackAndroid, Platform, Image, View} from 'react-native';
import Drawer from 'react-native-drawer';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AboutCmp from './about';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.navigator = this.props.navigator;
    }
    _onHomeClick() {
        this.refs.drawer.closeDrawer();
    }
    _onMenuClick() {
        this.refs.drawer.openDrawer();
    }
    _onAboutClick() {
        if (this.navigator) {
            this.navigator.push({
                name: 'about',
                component: AboutCmp
            })
            this.refs.drawer.closeDrawer();
        }
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
    onBackAndroid(){
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }
    render() {
        let navigationView = (
            <View>
                <TouchableHighlight underlayColor = "rgba(34, 26, 38, 0.1)" onPress={() => this._onHomeClick()}>
                    <View style = {styles.item}>
                        <Text style = {styles.itemText}>首页</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style = {{marginTop: 10}} underlayColor = "rgba(34, 26, 38, 0.1)" onPress={() => this._onAboutClick(this.props)}>
                    <View style = {styles.item}>
                        <Text style = {styles.itemText}>关于</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref="drawer"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={styles.headerBar}>
                    <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onMenuClick()}>
                        <Image style = {styles.iconImage} source = {require('../../images/ic_menu.png')}></Image>
                    </TouchableHighlight>
                    <Text style = {styles.headerText}>首页</Text>
                </View>
                <ScrollableTabView style = {{flex: 1}} tabBarUnderlineColor = "white"
                    tabBarInactiveTextColor = "#F2F2F2" tabBarBackgroundColor = "#27B5EE" tabBarActiveTextColor = "white">
                    <View category = 'Android' tabLabel = "安卓" {...this.props}></View>
                    <View category = 'iOS' tabLabel = "苹果" {...this.props}></View>
                <View category = '拓展资源' tabLabel = "拓展" {...this.props}></View>
                </ScrollableTabView>
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(34, 26, 38, 0.1)'
    },
    itemText: {
        marginLeft: 6,
        fontWeight: 'bold',
        fontSize: 16
    },
    iconImage: {
        height: 30,
        margin: 4,
        width: 30
    },
    headerBar: {
        backgroundColor: '#27B5EE',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    headerText: {
        fontSize: 22,
        color: 'white',
        marginLeft: 10
    },
});

export default Home;