import {ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Flatcard from './src/components/Flatcard';
import ElevatedCard from './src/components/ElevatedCard';
import ImageCard from './src/components/ImageCard';

export default class App extends Component {
  render() {
    return (
      <ScrollView className=" p-3 flex  bg-white">
        <Text className="text-2xl font-bold my-2 text-black">Cards</Text>
        <View className="flex flex-row mt-3 w-full justify-between flex-wrap">
          <Flatcard color={'bg-red-500'} text={'red'} />
          <Flatcard color={'bg-green-500'} text={'green'} />
          <Flatcard color={'bg-blue-500'} text={'blue'} />
          <Flatcard color={'bg-yellow-500'} text={'yellow'} />
        </View>
        <Text className="text-2xl font-bold mb-2 text-black">
          Horizontal Scrolling Cards
        </Text>
        <ScrollView horizontal={true} className="mt-2">
          <ElevatedCard />
          <ElevatedCard />
          <ElevatedCard />
          <ElevatedCard />
        </ScrollView>
        <Text className="text-2xl font-bold text-black my-4">
          Image Card
        </Text>
        <View className="">
          <ImageCard />
        </View>
      </ScrollView>
    );
  }
}
