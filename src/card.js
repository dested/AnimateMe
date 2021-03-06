import {PixelRatio, StyleSheet, View} from 'react-native';
import React from 'react';

export let Card = props => {
    return (
        <View
            style={[
                styles.cardStyle,
                props.style
            ]}
        >
            {props.children}
        </View>
    );
};

let styles = StyleSheet.create({
    cardStyle: {
        marginVertical: 5,
        marginHorizontal: 2,
        flex: 1,
        borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderRadius: 2,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3
    }
});
