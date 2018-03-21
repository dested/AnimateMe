import React, {Component} from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    LayoutAnimation,
    View
} from 'react-native';
import {Card} from './card';

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
                {this.renderCalendar(month)}
                {this.renderCardContent()}
            </ScrollView>
        );
    }

    renderCardContent() {
        return [0, 1, 2, 3, 4, 5, 6, 7].map(i => <Card style={{height: 80}} key={i}/>);
    }

    renderCalendar(month) {
        return (
            <View style={styles.month}>
                {month.map((week, weekIndex) => this.renderWeek(weekIndex, week))}
            </View>
        );
    }

    renderWeek(weekIndex, week) {
        if (this.state.selectedWeek === weekIndex || this.state.selectedWeek === -1) {
            return (
                <View key={weekIndex} style={styles.week}>
                    {week.map((day, dayIndex) => (
                        this.renderDay(weekIndex, day, dayIndex)
                    ))}
                </View>
            );
        } else {
            return <View key={weekIndex}/>;
        }
    }

    renderDay(weekIndex, day, dayIndex) {
        return (
            <TouchableOpacity
                onPress={() => this.selectWeek(weekIndex)}
                key={dayIndex}
                style={styles.day}
            >
                <Text style={{fontSize: 16}}>{day !== 0 ? day : ''}</Text>
            </TouchableOpacity>
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

let square = Dimensions.get('window').width / 7;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
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
        height: square,
        backgroundColor: '#ff8e9a'
    },
    day: {
        width: square,
        height: square,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: '#ff8e9a'
    }
});
