/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.press1add = this.press1add.bind(this)
    this.press2add = this.press2add.bind(this)
    this.press1min = this.press1min.bind(this)
    this.press2min = this.press2min.bind(this)
    this.random = this.random.bind(this)
    this.restart = this.restart.bind(this)
    this.timer = this.timer.bind(this)
    this.timerCheck = this.timerCheck.bind(this)
    this.restartTime = this.restartTime.bind(this)
    this.state = {
      p1: 20,
      p2: 20,
      randomNum: 0,
      time: 0,
      timeOff: true,
      buttonColor: 'lime'
    };
  }
  press1add() {
    this.setState({ p1: this.state.p1 + 1 })
  }
  press2add() {
    this.setState({ p2: this.state.p2 + 1 })
  }
  press1min() {
    this.setState({ p1: this.state.p1 - 1 })
  }
  press2min() {
    this.setState({ p2: this.state.p2 - 1 })
  }
  random() {
    this.setState({ randomNum: (Math.floor(Math.random() * 20) + 1) })
  }
  restart() {
    this.setState({
      p1: 20,
      p2: 20,
      randomNum: 0,
      time: 0,
      buttonColor: 'lime'
    })
    clearInterval(this.interval)
  }
  restartTime() {
    clearInterval(this.interval)
    delete this.interval
    this.setState({
      time: 0,
      timeOff: true,
      buttonColor: 'lime'
    })
  }
  timerCheck() {
    if (this.state.timeOff === true) {
      if (this.interval === undefined) {
        this.interval = setInterval(this.timer, 1000)
      }
      this.setState({
        timeOff: this.state.timeOff = false,
        buttonColor: 'red'
      })
    }
    else {
      this.setState({
        timeOff: this.state.timeOff = true,
        buttonColor: 'lime'
      })
    }
  }
  timer() {
    if (this.state.timeOff === true) {
      this.setState({ time: this.state.time })
    }
    else {
      this.setState({ time: this.state.time + 1 })
    }
  }

  render() {
    var buttonColor = {color: this.state.buttonColor}
    return (
      <Image source={require('./img/background.jpg')} style={styles.container} >
        <View style={styles.player2Container}>
            <TouchableHighlight onPress={this.press2min}>
                <Text style={styles.minus}>-</Text>
            </TouchableHighlight>
            <Text style={styles.lifeTotal}>{this.state.p2}</Text>
            <TouchableHighlight onPress={this.press2add}>
                <Text style={styles.plus}>+</Text>
            </TouchableHighlight>
        </View>

        <View style={styles.centerContainer}>
            <View style={styles.diceContainer}>
                <TouchableHighlight onPress={this.random}>
                    <Image source={require('./img/icosahedron.png')} style={styles.diceImg}></Image>
                </TouchableHighlight>
                <Text style={styles.centerText}>{this.state.randomNum}</Text>
            </View>
            {/*Timer*/}
            <View style={styles.timeContainer}>
                <TouchableHighlight onPress={this.timerCheck} onLongPress={this.restartTime}>
                    <Text style={[styles.centerText, buttonColor]}>{this.state.timeOff ? 'Start' : 'Stop'}</Text>
                </TouchableHighlight>
                <Text style={styles.centerText}>{this.state.time}</Text>
            </View>
            <TouchableHighlight onPress={this.restart}>
                <Text style={styles.centerText}>Reset</Text>
            </TouchableHighlight>
        </View>

        <View style={styles.player1Container}>
            <TouchableHighlight onPress={this.press1min}>
              <Text style={styles.minus}>-</Text>
            </TouchableHighlight>
            <Text style={styles.lifeTotal}>{this.state.p1}</Text>
            <TouchableHighlight onPress={this.press1add}>
              <Text style={styles.plus}>+</Text>
            </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch'
  },
  player1Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-90deg'}]
  },
  player2Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
    transform: [{rotate: '180deg'}]
  },
  diceContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  timeContainer: {
    flexDirection: 'row'
  },
  centerText: {
    fontSize: 45,
    textAlign: 'center',
    color: 'white',
    margin: 10,
    fontFamily: 'Heiti TC',
    shadowOffset:{
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  diceImg: {
    width: 50,
    height: 50
  },
  plus: {
    color: 'lime',
    fontSize: 100,
    margin: 10,
    shadowOffset:{
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  minus: {
    color: 'red',
    fontSize: 110,
    margin: 10,
    shadowOffset:{
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  lifeTotal: {
    fontSize: 100,
    margin: 10,
    color: 'white',
    shadowOffset:{
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
