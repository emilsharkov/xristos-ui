import React from "react";
import { View } from "react-native";

export interface DefaultMockupProps {
    children?: React.ReactNode;
}

const DefaultMockup = (props: DefaultMockupProps) => {
    const { children } = props;
    return (
        <View className="relative mx-auto border-[#444] bg-[#444] border-[14px] rounded-[40px] h-[600px] w-[300px]">
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[72px] left-[-17px]" />
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[124px] left-[-17px]" />
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[178px] left-[-17px]" />
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[142px] right-[-17px]" />
            <View className="rounded-[20px] overflow-hidden w-[272px] h-[572px] bg-white">
                {children}
            </View>
        </View>
    )
}

export default DefaultMockup;