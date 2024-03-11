import { Children } from "react";
import { View } from "react-native"
import ChevronLeft from './images/chevron-left.svg'
import ChevronRight from './images/chevron-right.svg'
import Button from "../Button/Button";

export interface CarouselButtonProps {
    direction: 'left' | 'right';
    index: number;
    setIndex: (index: number) => void;
}

const CarouselButton = (props: CarouselButtonProps) => {
    const {direction,index,setIndex} = props
    const indexMutation = direction === 'right' ? 1: -1
    const Icon = direction === 'right' ? ChevronRight: ChevronLeft

    const mutateIndex = () => {
        setIndex(index + indexMutation)
    }

    return (
        <>
            <Button
                onPress={() => mutateIndex()}
                variant="link"
            >
                <Icon/>
            </Button>
        </>
    )
}

export default CarouselButton