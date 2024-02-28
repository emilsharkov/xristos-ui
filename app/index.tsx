import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import BreadCrumbRoute from '@/components/BreadCrumb/BreadCrumbRoute';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import Arrow from '@/components/BreadCrumb/arrow.svg'
import Home from '@/components/BreadCrumb/home.svg'
import Chat from '@/components/BreadCrumb/chat.svg'
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import ButtonGroupItem from '@/components/ButtonGroup/ButtonGroupItem';

export default function App() {
  const [open,setOpen] = useState<boolean>(false)
  const [progress, setProgress] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-[#fafafa]">
      <View className='w-[90%]'>
        <ButtonGroup>
          <ButtonGroupItem
            icon={Home}
            name={'Home'}
            onPress={() => console.log('Home')}
          />
          <ButtonGroupItem
            icon={Chat}
            name={'Chat'}
            onPress={() => console.log('Chat')}
          />
          <ButtonGroupItem
            icon={Arrow}
            name={'Arrow'}
            onPress={() => console.log('Arrow')}
          />
        </ButtonGroup>
      </View>
    </View>
  )
}

