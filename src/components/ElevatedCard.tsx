import {View, Text} from 'react-native';
import React from 'react';

type props = {
  color: string;
  text: string;
};

const ElevatedCard = () => {
  return (
      <View
        className={` p-2   bg-blue-200 flex  w-[300px] h-40 justify-center items-center mr-2  rounded-lg shadow-lg shadow-blue-400`}>
        <Text className="text-lg font-extrabold">Tap</Text>
      </View>
  );
};

export default ElevatedCard;
