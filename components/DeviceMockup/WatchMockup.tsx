import { View } from "react-native";

export interface WatchMockupProps {
    children?: React.ReactNode;
}

const WatchMockup = (props: WatchMockupProps) => {
    const {children} = props

    return(
        <>
            <View className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[40px] h-[63px] w-[133px]"></View>
            <View className="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[40px] h-[213px] w-[208px]">
                <View className="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute right-[-16px] top-[40px] rounded-e-lg"></View>
                <View className="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute right-[-16px] top-[88px] rounded-e-lg"></View>
                <View className="rounded-[32px]] overflow-hidden h-[193px] w-[188px]">
                    {children}
                </View>
            </View>
            <View className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[40px] h-[63px] w-[133px]"></View>
        </>
    )
}

export default WatchMockup