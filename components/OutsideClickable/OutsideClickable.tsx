import { useEffect, useState } from "react";
import { Dimensions, LayoutRectangle, TouchableOpacity } from "react-native"

export interface OustideClickableProps {
    xAdjustment?: number;
    yAdjustment?: number;
    open: boolean;
    setOpen: (open: boolean) => void;
    z?: number;
    className?: string;
}

const OustideClickable = (props: OustideClickableProps) => {
    const {xAdjustment,yAdjustment,open,setOpen,z,className} = props

    return (
        <>
            {open &&
                <TouchableOpacity
                    onPress={() => setOpen(false)}
                    style={{
                        zIndex: z ?? 50,
                        top: -(yAdjustment ?? 0),
                        left: -(xAdjustment ?? 0)
                    }}
                    className={`${className} opacity-0 bg-gray-100 absolute w-screen h-screen`}
                />
            }
        </>
    )
}

export default OustideClickable