import { TouchableOpacity, View } from "react-native";
import { Children, isValidElement, useState } from "react";
import AccordianContent from '@/components/Accordian/AccordianContent'
import AccordianTrigger from '@/components/Accordian/AccordianTrigger'

export interface AccordianItemProps {
    children: React.ReactNode;
}

const AccordianItem = (props: AccordianItemProps) => {
    const {children} = props
    const trigger = Children.toArray(children).find(child => isValidElement(child) && child.type === AccordianTrigger)
    const content = Children.toArray(children).find(child => isValidElement(child) && child.type === AccordianContent)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <View>
            <TouchableOpacity
                onPress={toggle}
            >
                {trigger}
            </TouchableOpacity>
            {isOpen ? content: null}
        </View>
    )
}

export default AccordianItem