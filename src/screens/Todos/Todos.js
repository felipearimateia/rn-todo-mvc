/**
* @format
* @flow
*/
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { inject, observer } from 'mobx-react/native'


/* style and state */
import style from './style'
import controller from './Controller'

type Props = {}

@inject('todos')
@observer
export default class Todos extends Component<Props> {

  renderItem = (item) => {
    return (
      <Text>item</Text>
    )
  }
  render () {
    console.log(JSON.stringify((controller.items)))
    return (
     <View>
      <FlatList
        data={this.props.todos.items}
        renderItem={this.renderItem}
      />
     </View>
    )
  }
}
