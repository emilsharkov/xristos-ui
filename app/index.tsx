import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import DeviceMockup from '@/components/DeviceMockup/DeviceMockup';
import Calendar from '@/components/Calendar/Calendar';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-[#fafafa]">
      <View className='w-[30%]'>
        <Calendar
          mode='range'
          defaultDate={new Date()}
        />
      </View>
    </View>
  )
}

