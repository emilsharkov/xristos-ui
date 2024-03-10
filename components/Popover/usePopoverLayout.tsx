import { useEffect, useState } from "react"
import { LayoutChangeEvent } from "react-native"

interface Dimensions {
    width: number;
    height: number
}


const usePopoverLayout = (position: 'top' | 'bottom' | 'left' | 'right') => {
    const gap = 3
    const [x,setX] = useState<number>(0)
    const [y,setY] = useState<number>(0)
    const [visible,setVisible] = useState<boolean>(false)
    const [triggerDimesions,setTriggerDimesions] = useState<Dimensions>()
    const [contentDimesions,setContentDimesions] = useState<Dimensions>()

    useEffect(() => {
        if(!triggerDimesions || !contentDimesions){ return }

        const {width: triggerWidth, height: triggerHeight} = triggerDimesions
        const {width: contentWidth, height: contentHeight} = contentDimesions

        let top = 0
        let left = 0
        switch(position){
            case 'top':
                top = -contentHeight - gap
                break
            case 'bottom':
                top = triggerHeight + gap
                break
            case 'left':
                left = -contentWidth - gap
                break
            case 'right':
                left = triggerWidth + gap
                break
        }
        setX(left)
        setY(top)
        setVisible(true)
    },[position,triggerDimesions,contentDimesions])

    const onTriggerLayout = (event: LayoutChangeEvent) => {
        const {height,width} = event.nativeEvent.layout
        setTriggerDimesions({width,height})
    }

    const onContentLayout = (event: LayoutChangeEvent) => {
        const {height,width} = event.nativeEvent.layout
        setContentDimesions({width,height})
    }

    return {x,y,visible,onTriggerLayout,onContentLayout}
}

export default usePopoverLayout