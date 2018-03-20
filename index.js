console.log('1');
import {AppRegistry, Button, View, UIManager} from 'react-native';
import Parallax from './src/Parallax';
import React, {Component} from 'react';
import Layout from './src/Layout';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class Switcher extends Component {
    constructor() {
        super();
        this.state = {
            selectedPage: 'layout'
        };
    }

    render() {
        return this.renderPage();
    }

    renderPage() {
        switch (this.state.selectedPage) {
            case 'home':
                return (
                    <View>
                        <Button onPress={() => this.switchPage('animate')} title={'Animation'} />
                        <Button onPress={() => this.switchPage('parallax')} title={'Parallax'} />
                        <Button onPress={() => this.switchPage('layout')} title={'Layout Animation'} />
                    </View>
                );
            case 'parallax':
                return <Parallax />;
            case 'layout':
                return <Layout />;
            case 'animate':
                return <Parallax />;
        }
    }

    switchPage(page) {
        this.setState(prev => ({...prev, selectedPage: page}));
    }
}

AppRegistry.registerComponent('AnimateMe', () => Switcher);
