import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import Calendar from '@/components/Calendar/Calendar';
import Popover from '@/components/Popover/Popover';
import PopoverTrigger from '@/components/Popover/PopoverTrigger';
import PopoverContent from '@/components/Popover/PopoverContent';
import Button from '@/components/Button/Button';

export default function App() {

  return (
    <>
      
      <View className="flex-1 items-center justify-center bg-[#fafafa]">
        <View className='w-[60%]'>
          <Popover>
            <PopoverTrigger>
              <Button variant='outline'>
                <Text>Bello</Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent position='top'>
              <Text>Popover Content</Text>
              {/* <Calendar
                  yearRange={[2000,2020]}
                  mode='range'
                  defaultDate={new Date()}
              /> */}
            </PopoverContent>
          </Popover>
        </View>
      </View>
    </>
    
  )
}

