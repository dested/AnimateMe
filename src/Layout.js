import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, LayoutAnimation, UIManager, View} from 'react-native';
import {Animated} from 'react-native';
import {Card} from './card';
import {Dimensions} from 'react-native';

export default class Layout extends Component {
    constructor() {
        super();
        this.state = {
            month: [
                [0, 0, 0, 1, 2, 3, 4],
                [5, 6, 7, 8, 9, 10, 11],
                [12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 24, 25, 26, 27],
                [28, 29, 30, 31, 0, 0, 0]
            ],
            selectedWeek: -1
        };
    }

    render() {
        let {month} = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.month}>
                    {month.map(
                        (week, weekIndex) =>
                            (this.state.selectedWeek === weekIndex || this.state.selectedWeek === -1) ? (
                                    <View key={weekIndex} style={styles.week}>
                                        {week.map((day, dayIndex) => (
                                            <TouchableOpacity
                                                onPress={() => this.selectWeek(weekIndex)}
                                                key={dayIndex}
                                                style={styles.day}
                                            >
                                                <Text style={{fontSize:16}}>{day !== 0 ? day : ''}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                )
                                :
                                <View key={weekIndex}/>
                    )}
                </View>
                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => <Card style={{height: 80}} key={i}/>)}
            </ScrollView>
        );
    }

    selectWeek(weekIndex) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

        if (this.state.selectedWeek === -1) {
            this.setState(prev => ({...prev, selectedWeek: weekIndex}));
        } else {
            this.setState(prev => ({...prev, selectedWeek: -1}));
        }
    }
}

let square = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c0c0c0',
        flexDirection: 'column'
    },
    month: {
        flexDirection: 'column',
        backgroundColor: '#ff8e9a'
    },
    week: {
        flexDirection: 'row',
        height: square / 7,
        backgroundColor: '#ff8e9a'
    },
    day: {
        width: square / 7,
        height: square / 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: '#ff8e9a'
    }
});
