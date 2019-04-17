import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [
                { "name": "Payment Type" },
                { "name": "Select Biller" },
                { "name": "Payment Info" }
            ]
        }
    }


    render() {
        let lines = [];
        let line_percentage = 94;
        let lb_length = this.props.labels.length-1;
        for (let i = 0; i < lb_length; i++) {
            lines.push(
                <View key={i} style={[styles.step_line, {width: (line_percentage/lb_length) + '%'}, { borderBottomColor: i < this.props.currentPosition - 1 ? '#0A9BF1' : '#c7c7c7' }]}>

                </View>
            );
        }
        return (
            <View style={styles.steps_container}>
                <View style={styles.steps}>
                    <View style={{ paddingLeft: 8, paddingRight: 8 }}>
                        <View style={styles.steps_numbers}>
                            {
                                this.props.labels.map((a, index) => {
                                    let indexer = index + 1;
                                    return <Animatable.View animation={this.props.currentPosition == indexer ? "bounceIn" : null}
                                        key={index}
                                        style={[
                                            styles.step_number,
                                            {
                                                borderColor: indexer <= this.props.currentPosition ? '#0A9BF1' : '#c7c7c7',
                                                backgroundColor: indexer < this.props.currentPosition ? '#0A9BF1' : '#fff'
                                            }]}>
                                        <Text style={[styles.step_number_text, {
                                            color: indexer == this.props.currentPosition ? '#0A9BF1' : indexer < this.props.currentPosition ? '#fff' : '#c7c7c7'
                                        }]}>{indexer}</Text>
                                    </Animatable.View>
                                })
                            }
                        </View>
                        <View style={styles.steps_lines}>
                            {lines}
                        </View>
                    </View>
                    <View style={styles.steps_text}>
                        {
                            this.props.labels.map((a, index) => {
                                let indexer = index + 1;
                                return <View key={index} style={styles.step_text}>
                                    <Text style={[styles.step_text_styles, indexer <= this.props.currentPosition ? { color: '#0A9BF1' } : { color: '#c7c7c7' }]}>{a}</Text>
                                </View>
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    steps_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    steps: {
        width: '90%',
        maxWidth: 450,
    },
    steps_numbers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 2
    },
    step_number: {
        width: 35,
        height: 35,
        borderWidth: 2,
        borderColor: '#c7c7c7',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#ababab',
        shadowOpacity: 1.0
    },
    step_number_text: {
        fontSize: 17,
        fontFamily: 'nunito-sans-bold',
        color: '#c7c7c7'
        // 0A9BF1
    },
    steps_lines: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        marginTop: -19,
        zIndex: 1
    },
    step_line: {
        width: '47%',
        borderBottomWidth: 3,
        borderBottomColor: '#c7c7c7'
    },
    steps_text: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 2
    },
    step_text: {
        width: 50
    },
    step_text_styles: {
        textAlign: 'center',
        fontSize: 12,
        color: '#c7c7c7',
        fontFamily: 'nunito-sans-regular'
    }
});