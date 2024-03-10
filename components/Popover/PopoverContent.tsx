import { View } from "react-native"

export interface PopoverContentProps {
    children?: React.ReactNode;
}

const PopoverContent = (props: PopoverContentProps) => {
    const {children} = props

    return (
        <>{children}</>
    )
}

export default PopoverContent