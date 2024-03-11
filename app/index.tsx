import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import DatePicker from '@/components/DatePicker/DatePicker';
import Card from '@/components/Card/Card';

export default function App() {

  return (
    <>
      <View className="flex-1 items-center justify-center bg-[#fafafa]">
        <View className='w-[60%]'>
          <Card>
            <Text>Hello</Text>
          </Card>
        </View>
      </View>
    </>
    
  )
}

