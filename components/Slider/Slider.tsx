import React, { useRef, useState } from 'react'
import { GestureResponderEvent, TouchableOpacity, UIManager, findNodeHandle } from 'react-native'
import Progress from '../Progress/Progress'

const Slider = () => {
    const [progress,setProgress] = useState<number>(0)
    const touchableRef = useRef(null)

    const handlePressIn = (event: GestureResponderEvent) => {
        event.persist()
        const touchableHandle = findNodeHandle(touchableRef.current)
        if (touchableHandle) {
            UIManager.measure(touchableHandle, (x, y, width, height, pageX, pageY) => {
                const { locationX } = event.nativeEvent
                const ratio = Math.min(1, Math.max(0, locationX / width))
                const percentage = Math.round(ratio * 100)
                setProgress(percentage)
            })
        }
    }

    return (
        <TouchableOpacity 
            className={`w-full`}
            ref={touchableRef} 
            onPressIn={handlePressIn} 
            onPressOut={handlePressIn}
        >
            <Progress progress={progress}/>
        </TouchableOpacity>
    )
}

export default Slider
