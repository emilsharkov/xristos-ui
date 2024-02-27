import { View } from "react-native";

export interface AccordianContentProps {
    children: React.ReactNode;
}

const AccordianContent = (props: AccordianContentProps) => {
    const {children} = props    

    return (
        <View
            className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
        >
            {children}        
        </View>
    )
}

export default AccordianContent