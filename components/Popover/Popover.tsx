import { Children, isValidElement, useRef, useState } from "react";
import { TouchableOpacity, View, LayoutChangeEvent } from "react-native";
import PopoverContent from "./PopoverContent";
import PopoverTrigger from "./PopoverTrigger";
import OustideClickable from "../OutsideClickable/OutsideClickable";
import useBackdropLayout from "../OutsideClickable/useBackdropLayout";
import usePopoverLayout from "./usePopoverLayout";

export interface PopoverProps {
    position?: 'top' | 'bottom' | 'left' | 'right';
    z?: number;
    children?: React.ReactNode;
}

const Popover = (props: PopoverProps) => {
    const {position,z,children} = props
    const [open,setOpen] = useState<boolean>(false)
    const trigger = Children.toArray(children).find(child => isValidElement(child) && child.type === PopoverTrigger)
    const content = Children.toArray(children).find(child => isValidElement(child) && child.type === PopoverContent)
    
    const {
        x: xBackdrop,
        y: yBackdrop,
        ref: backdropRef,
        onLayout: onBackdropLayout
    } = useBackdropLayout<TouchableOpacity>()

    const {
        x: xPopover,
        y: yPopover,
        visible,
        onContentLayout,
        onTriggerLayout
    } = usePopoverLayout(position ?? 'top')

    const onCombinedTriggerLayout = (event: LayoutChangeEvent) => {
        onTriggerLayout(event)
        onBackdropLayout(event)
    }

    return (
        <>
            <OustideClickable
                xAdjustment={xBackdrop}
                yAdjustment={yBackdrop}
                open={open}
                setOpen={setOpen}
            />
            
            {open ? (
                <View 
                    onLayout={onContentLayout}
                    style={{
                        opacity: visible ? 100: 0,
                        top: yPopover,
                        left: xPopover,
                        zIndex: z ?? 51
                    }}
                    className="absolute inline-block w-full p-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                >
                    {content}
                </View>
            ): null}

            <TouchableOpacity 
                ref={backdropRef}
                onLayout={onCombinedTriggerLayout}
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