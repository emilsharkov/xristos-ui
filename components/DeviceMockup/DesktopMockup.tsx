import { View } from "react-native";

export interface DesktopMockupProps {
    children?: React.ReactNode;
}

const DesktopMockup = (props: DesktopMockupProps) => {
    const {children} = props

    return(
        <>
            <View className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] w-[301px] ">
                <View className="rounded-xl bg-white overflow-hidden h-[140px]">
                    {children}
                </View>
            </View>
            <View className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] w-[301px]"></View>
            <View className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] w-[83px]"></View>
        </>
    )
}

export default DesktopMockup