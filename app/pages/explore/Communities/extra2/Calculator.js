import React, { PropTypes } from 'react';
import { Button } from './Calcy/';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,TouchableOpacity,Image
} from 'react-native';
const leftbutton_white = require('../../Images/DashImages/buttons/leftbutton_white.png');
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';

const {
    MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL,
    CALCULATOR,
    MEMBERS_AREA_MARKET_PLACE_DRIVER
  } = RouterScene;

export default class Calculator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            formula: "",
        }
        this.onPressOperatorOrNumber = this.onPressOperatorOrNumber.bind(this)
    }
    onPressOperatorOrNumber = (symbol) => {
        if (symbol === "X") {
            symbol = "*";
        }
        this.setState({
            formula: this.state.formula + symbol
        })
    }
    onPressSubmitResult = () => {
        try {
            this.setState({
                result: eval(this.state.formula) || 0
            })
        } catch (e) {
            alert("Input wrong.")
        }
    }
    backspaceOperator = () => {
        this.setState({
            formula: this.state.formula.slice(0, this.state.formula.length - 1)
        })
    }
    onPressACButton = () => {
        this.setState({ formula: "" })
    }
    MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL = () => {
        //By Harshit
        Actions[MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL]()
      };
    render() {
        return (
            <View style={{ flex: 1 }}>        
                <View style={{ backgroundColor: '#282828', height: 130 }}>
                    <TouchableOpacity onPress={this.MEMBERS_AREA_MARKET_PLACE_DRIVER_SELL}>
                        <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={[styles.resultText, { fontSize: (60 - (this.state.result.toString().length)) }]}>
                            {this.state.result}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <View style={{ flex: 1, backgroundColor: '#494949' }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={styles.formulaText}>
                                {this.state.formula}
                            </Text>
                            <TouchableOpacity onPress={this.backspaceOperator}>
                                <Image style={styles.leftbuttonwhite} source={leftbutton_white} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Button style={styles.ACbutton} titleStyle={styles.titleOperationStyle} onPress={this.onPressACButton} title="AC" />
                        <Button style={styles.operation} titleStyle={styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="/" />
                    </View>
                    <View style={styles.row}>
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="1" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="2" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="3" />
                        <Button style={styles.operation} titleStyle={styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="X" />
                    </View>
                    <View style={styles.row}>
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="4" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="5" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="6" />
                        <Button style={styles.operation} titleStyle={styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="-" />
                    </View>
                    <View style={styles.row}>
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="7" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="8" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="9" />
                        <Button style={styles.operation} titleStyle={styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="+" />
                    </View>
                    <View style={styles.row}>
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="0" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="00" />
                        <Button style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="." />
                        <Button style={styles.equalButton} titleStyle={styles.titleOperationStyle} onPress={this.onPressSubmitResult} title="=" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'column'
    },
    ACbutton: {
        flex: 3,
        backgroundColor: '#2b79c2',
        height: 75,
    },
    buttonNumber: {
        flex: 1,
        height: 75,
    },
    operation: {
        backgroundColor: '#2b79c2',
        height: 75,
        flex: 1,
    },
    textButton: {
        color: 'black',
    },
    formulaText: {
        flex: 1,
        color: 'white',
        textAlign: 'right',
        fontSize: 30,
        marginRight: 16
    },
    iconStyle: {
        color: 'white',
        marginLeft: 16,
    },

    resultText: {
        color: 'white',
        textAlign: 'right',
        fontSize: 60,
        marginRight: 16
    },
    titleOperationStyle: {
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    equalButton: {
        backgroundColor: '#4aa7ff',
        flex: 1,
        height: 75,
    },
    leftbuttonwhite: {
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft: 10,
        justifyContent:"center"
    },
})