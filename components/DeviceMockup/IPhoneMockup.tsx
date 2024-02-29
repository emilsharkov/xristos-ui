import { Dimensions, View } from "react-native";

export interface IPhoneMockupProps {
    children?: React.ReactNode;
}

const IPhoneMockup = (props: IPhoneMockupProps) => {
    const {children} = props

    return(
        <View className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[40px] h-[600px] w-[300px] shadow-xl">
            <View style={{ transform: [{ translateX: -75 }] }} className="w-[148px] h-[18px] bg-gray-800 rounded-b-[16px] left-[50%] z-50 absolute"></View>
            <View className="h-[46px] w-[3px] bg-gray-800 absolute left-[-17px] top-[124px] rounded-[16px]"></View>
            <View className="h-[46px] w-[3px] bg-gray-800 absolute left-[-17px] top-[178px] rounded-[16px]"></View>
            <View className="h-[64px] w-[3px] bg-gray-800 absolute right-[-17px] top-[142px] rounded-[16px]"></View>
            <View className="rounded-[32px] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                {children}
            </View>
        </View>
    )
}

export default IPhoneMockup