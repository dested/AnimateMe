import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Animated} from 'react-native';

export default class Parallax extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.header} source={require('../assets/lights.jpg')} />
                <Text style={styles.body}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dicta distinctio fugit
                    illum inventore iusto, laudantium maiores modi neque nisi nostrum perferendis quaerat quidem quis
                    saepe veniam voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus error
                    minima quia recusandae rem sed? Animi aut, blanditiis corporis, doloribus error impedit molestiae
                    necessitatibus, obcaecati possimus quam quos rem sapiente. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Alias animi cumque dolore earum est fuga laborum nobis, officia possimus
                    repellendus similique voluptatum? A eum, illum minima non saepe tempore voluptatem. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Aliquam, mollitia reiciendis? Animi, eveniet itaque
                    laboriosam perferendis quasi voluptatem? Commodi cumque dicta fuga, illum inventore iste minima
                    obcaecati recusandae sed ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem
                    deleniti dicta distinctio fugit illum inventore iusto, laudantium maiores modi neque nisi nostrum
                    perferendis quaerat quidem quis saepe veniam voluptatum! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ducimus error minima quia recusandae rem sed? Animi aut, blanditiis corporis,
                    doloribus error impedit molestiae necessitatibus, obcaecati possimus quam quos rem sapiente. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Alias animi cumque dolore earum est fuga laborum
                    nobis, officia possimus repellendus similique voluptatum? A eum, illum minima non saepe tempore
                    voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, mollitia reiciendis?
                    Animi, eveniet itaque laboriosam perferendis quasi voluptatem? Commodi cumque dicta fuga, illum
                    inventore iste minima obcaecati recusandae sed ullam? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ab autem deleniti dicta distinctio fugit illum inventore iusto, laudantium maiores
                    modi neque nisi nostrum perferendis quaerat quidem quis saepe veniam voluptatum! Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Ducimus error minima quia recusandae rem sed? Animi aut,
                    blanditiis corporis, doloribus error impedit molestiae necessitatibus, obcaecati possimus quam quos
                    rem sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi cumque dolore
                    earum est fuga laborum nobis, officia possimus repellendus similique voluptatum? A eum, illum minima
                    non saepe tempore voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
                    mollitia reiciendis? Animi, eveniet itaque laboriosam perferendis quasi voluptatem? Commodi cumque
                    dicta fuga, illum inventore iste minima obcaecati recusandae sed ullam?
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 300
    },
    body: {
        padding: 20,
        backgroundColor: 'white'
    }
});
