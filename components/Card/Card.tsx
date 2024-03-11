import React from "react";
import { View,Text, GestureResponderEvent, TouchableOpacity } from "react-native"

export interface CardProps {
    styling?: string;
    onPress?: (e: GestureResponderEvent) => void;
    children?: React.ReactNode;
}

const Card = (props: CardProps) => {
    const {styling,children,onPress} = props

    return (
        <TouchableOpacity 
            onPress={onPress}
            className={'block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'}
        >
            {children}
        </TouchableOpacity>
    )
}

export default Card