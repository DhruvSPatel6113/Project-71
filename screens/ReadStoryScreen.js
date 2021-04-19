import * as React from 'react';
import { View, Text } from 'react-native';
import AppHeader from '../AppHeader';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <AppHeader />
        </View>
        <View style={{ alignItems: 'center', marginTop: 150 }}>
          <Text>Read Story Screen</Text>
        </View>
      </View>
    );
  }
}
