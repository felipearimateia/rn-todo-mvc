/**
* @format
* @flow
*/
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { inject, observer } from 'mobx-react/native'


/* style and state */
import style from './style'
import controller from './Controller'

type Props = {}

export default class Todos extends Component<Props> {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text>Olá MVC</Text>
      </View>
    )
  }
}
