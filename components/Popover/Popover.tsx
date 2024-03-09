import { Children, isValidElement, useRef, useState } from "react";
import { GestureResponderEvent, TouchableOpacity, View, StyleSheet, LayoutChangeEvent, LayoutRectangle } from "react-native";
import PopoverContent from "./PopoverContent";
import PopoverTrigger from "./PopoverTrigger";
import OustideClickable from "../OutsideClickable/OutsideClickable";
import useBackdropLayout from "./useBackdropLayout";

export interface PopoverProps {
    z?: number;
    children?: React.ReactNode;
}

const Popover = (props: PopoverProps) => {
    const {z,children} = props
    const [open,setOpen] = useState<boolean>(false)
    const trigger = Children.toArray(children).find(child => isValidElement(child) && child.type === PopoverTrigger)
    const content = Children.toArray(children).find(child => isValidElement(child) && child.type === PopoverContent)
    const {x,y,ref,onLayout} = useBackdropLayout<TouchableOpacity>()

    return (
        <>
            <OustideClickable
                xAdjustment={x}
                yAdjustment={y}
                open={open}
                setOpen={setOpen}
            />
            
            {open ? (
                <View 
                    style={{zIndex: z ?? 51}}
                    className="absolute inline-block p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                >
                    {content}
                </View>
            ): null}

            <TouchableOpacity 
                ref={ref}
                onLayout={onLayout}
                onPress={() => setOpen(true)}
            >
                <View pointerEvents="none">
                    {trigger}
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Popover