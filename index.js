import {AppRegistry, Button, View, UIManager} from 'react-native';
import React, {Component} from 'react';
import ViewFlip from './src/ViewFlip';
import ComponentFlip from './src/ComponentFlip';
import Layout from './src/Layout';
import Parallax from './src/Parallax';

class Switcher extends Component {
    constructor() {
        super();
        this.state = {
            selectedPage: 'home'
        };
    }

    render() {
        //poor mans navigation

        switch (this.state.selectedPage) {
            case 'home':
                return (
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Button onPress={() => this.switchPage('viewFlip')} title={'View Flip'} />
                        <Button onPress={() => this.switchPage('parallax')} title={'Parallax'} />
                        <Button onPress={() => this.switchPage('layout')} title={'Layout Animation'} />
                        <Button onPress={() => this.switchPage('componentFlip')} title={'Component Flip'} />
                    </View>
                );
            case 'viewFlip':
                return <ViewFlip />;
            case 'parallax':
                return <Parallax />;
            case 'layout':
                return <Layout />;
            case 'componentFlip':
                return <ComponentFlip />;
        }
    }

    switchPage(page) {
        this.setState(prev => ({...prev, selectedPage: page}));
    }
}

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('AnimateMe', () => Switcher);
