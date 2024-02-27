import Accordian from '@/components/Accordian/Accordian';
import AccordianContent from '@/components/Accordian/AccordianContent';
import AccordianItem from '@/components/Accordian/AccordianItem';
import AccordianTrigger from '@/components/Accordian/AccordianTrigger';
import Card from '@/components/Card/Card';
import Dialog from '@/components/Dialog/Dialog';
import Progress from '@/components/Progress/Progress';
import Slider from '@/components/Slider/Slider';
import Spinner from '@/components/Spinner/Spinner';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [open,setOpen] = useState<boolean>(false)
  const [progress, setProgress] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-[#fafafa]">
      <View className='w-[90%]'>
        <Accordian>
          <AccordianItem>
            <AccordianTrigger>
              <Text>Bello</Text>
            </AccordianTrigger>
            <AccordianContent>
              <Text>There</Text>
            </AccordianContent>
          </AccordianItem>
        </Accordian>
        
        {/* <View>
          <View className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Text>What is Flowbite?</Text>
          </View>
        </View>
        <View>
          <View className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <Text className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including Views, dropdowns, modals, navbars, and more.</Text>
          </View>
        </View> */}
      </View>
    </View>
  )
}

