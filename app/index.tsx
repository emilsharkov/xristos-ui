import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import DeviceMockup from '@/components/DeviceMockup/DeviceMockup';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-[#fafafa]">
      <View className='w-[90%]'>
        <DeviceMockup
          type='android'
        >
          
        </DeviceMockup>
      </View>
    </View>
  )
}

