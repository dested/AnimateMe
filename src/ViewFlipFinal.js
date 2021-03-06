import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Animated} from 'react-native';

export default class ViewFlip extends Component {
    constructor() {
        super();

        this.state = {
            flipAnimation: new Animated.Value(0)
        };
    }

    render() {
        let rotateAnimation = this.state.flipAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [`0deg`, `${360}deg`]
        });
        let translateXAnimation = this.state.flipAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200]
        });

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
                    <Animated.View
                        style={{
                            width: 150,
                            height: 150,
                            backgroundColor: 'green',

                            transform: [{translateX: translateXAnimation}, {rotate: rotateAnimation}]
                        }}
                    />
                </View>
                <Button title={'Flip!'} onPress={() => this.flip()} />
            </View>
        );
    }

    flip() {
        this.state.flipAnimation.setValue(0);
        Animated.timing(this.state.flipAnimation, {
            toValue: 1,
            duration: 1500
            // useNativeDriver: true
        }).start();
    }
}
