import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Animated} from 'react-native';

export default class ComponentFlip extends Component {
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
                    <AnimatedFancyComp rotateAnimation={rotateAnimation} translateXAnimation={translateXAnimation}/>
                    {/*<FancyComp rotateAnimation={'12deg'} translateXAnimation={10}/>*/}
                </View>
                <Button title={'Flip!'} onPress={() => this.flip()}/>
            </View>
        );
    }

    flip() {
        this.state.flipAnimation.setValue(0);
        Animated
            .timing(this.state.flipAnimation, {
                toValue: 1,
                duration: 1500
            })
            .start();
    }
}

class FancyComp extends Component {
    render() {
        console.log(this.props.rotateAnimation);
        console.log(this.props.translateXAnimation);
        return (
            <View style={{
                width: 150, height: 150, backgroundColor: 'green',
                transform: [
                    {rotate: this.props.rotateAnimation},
                    {translateX: this.props.translateXAnimation},
                ]
            }}/>
        );
    }
}

const AnimatedFancyComp = Animated.createAnimatedComponent(FancyComp);