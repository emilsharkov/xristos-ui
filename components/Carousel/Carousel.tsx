import { Children, isValidElement, useState } from "react";
import { View } from "react-native"
import CarouselItem from "./CarouselItem";

export interface CarouselProps {
    children?: React.ReactNode;
}

const Carousel = (props: CarouselProps) => {
    const {children} = props
    const items = Children.toArray(children).find(child => isValidElement(child) && child.type === CarouselItem)
    const [index,setIndex] = useState<number>(0)

    return (
        <>
            <View>
                
            </View>
        </>
    )
}

export default Carousel