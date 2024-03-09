import React, { ReactElement, useRef, useState } from "react";
import { HostComponent, LayoutChangeEvent, NativeMethods } from "react-native";

const useBackdropLayout = <T extends React.Component<any> & NativeMethods>() => {
    const ref = useRef<T>(null)
    const [x,setX] = useState<number>(0)
    const [y,setY] = useState<number>(0)

    const onLayout = (e: LayoutChangeEvent) => {
        const element = ref.current
        if(element === null) { return }
        element.measure((x, y, width, height, pageX, pageY) => {
            setX(pageX)
            setY(pageY)
        })
    }

    return {x,y,ref,onLayout}
}

export default useBackdropLayout