import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Animated} from 'react-native';

export default class ViewFlip extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
                    <View
                        style={{
                            width: 150,
                            height: 150,
                            backgroundColor: 'green'
                        }}
                    />
                </View>
                <Button title={'Flip!'} onPress={() => this.flip()} />
            </View>
        );
    }

    flip() {}
}
