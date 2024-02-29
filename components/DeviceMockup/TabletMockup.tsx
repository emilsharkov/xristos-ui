import { View } from "react-native";

export interface TabletMockupProps {
    children?: React.ReactNode;
}

const TabletMockup = (props: TabletMockupProps) => {
    const {children} = props

    return(
        <View className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[40px] h-[454px] w-[341px]">
            <View className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute left-[-17px] top-[72px] rounded-s-lg"></View>
            <View className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute left-[-17px] top-[124px] rounded-s-lg"></View>
            <View className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute left-[-17px] top-[178px] rounded-s-lg"></View>
            <View className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute right-[-17px] top-[142px] rounded-e-lg"></View>
            <View className="rounded-[32px] overflow-hidden h-[426px] bg-white dark:bg-gray-800">
                {children}
            </View>
        </View>
    )
}

export default TabletMockup