import {View, Text} from 'react-native';
import React from 'react';

type props = {
  color: string;
  text: string
}

const Flatcard = (props: props ) => {
  return (
    <View className={` p-2 ${props.color} flex  min-w-[48%] h-28 justify-center items-center   mb-5 rounded-lg `}>
      <Text className="text-lg font-extrabold">{props.text}</Text>
    </View>
  );
};

export default Flatcard;
