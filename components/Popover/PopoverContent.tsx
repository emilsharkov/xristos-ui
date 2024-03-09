import { View } from "react-native"

export interface PopoverContentProps {
    position: 'top' | 'bottom' | 'left' | 'right';
    children?: React.ReactNode;
}

const PopoverContent = (props: PopoverContentProps) => {
    const {position,children} = props

    return (
        <>{children}</>
    )
}

export default PopoverContent