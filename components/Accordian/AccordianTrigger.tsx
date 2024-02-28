import { TouchableOpacity, Text, View } from "react-native"

export interface AccordianTriggerProps {
    children?: React.ReactNode;
}

const AccordianTrigger = (props: AccordianTriggerProps) => {
    const {children} = props
    
    return (
        <View
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
        >
            {children}
        </View>
    )
}

export default AccordianTrigger