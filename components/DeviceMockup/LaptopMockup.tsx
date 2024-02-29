import { View } from "react-native";

export interface LaptopMockupProps {
    children?: React.ReactNode;
}

const LaptopMockup = (props: LaptopMockupProps) => {
    const {children} = props

    return(
        <>
            <View className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] w-[301px]">
                <View className="rounded-lg overflow-hidden h-[156px] bg-white">
                    {children}
                </View>
            </View>
            <View className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] w-[351px] "></View>
        </>
    )
}

export default LaptopMockup