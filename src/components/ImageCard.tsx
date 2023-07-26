import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageCard = () => {
  return (
    <View className='flex w-full'>
      <Image source={{
        uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
      }}
      className='w-full h-[300px] object-contain rounded-lg'
      
      / >
    </View>
  )
}

export default ImageCard