import { View } from "react-native";

export interface AndroidMockupProps {
    children?: React.ReactNode;
}

const AndroidMockup = (props: AndroidMockupProps) => {
    const {children} = props

    return(
        <View className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
            <View className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></View>
            <View className="h-[32px] w-[3px] bg-gray-800 absolute left-[-17px] top-[72px] rounded-s-lg"></View>
            <View className="h-[46px] w-[3px] bg-gray-800 absolute left-[-17px] top-[124px] rounded-s-lg"></View>
            <View className="h-[46px] w-[3px] bg-gray-800 absolute left-[-17px] top-[178px] rounded-s-lg"></View>
            <View className="h-[64px] w-[3px] bg-gray-800 absolute right-[-17px] top-[142px] rounded-e-lg"></View>
            <View className="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                {children}
            </View>
        </View>
    )
}

export default AndroidMockup