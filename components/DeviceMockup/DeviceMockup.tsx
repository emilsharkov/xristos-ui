import AndroidMockup from "./AndroidMockup";
import DefaultMockup from "./DefaultMockup";
import DesktopMockup from "./DesktopMockup";
import IPhoneMockup from "./IPhoneMockup";
import LaptopMockup from "./LaptopMockup";
import TabletMockup from "./TabletMockup";
import WatchMockup from "./WatchMockup";
import { View } from "react-native";

const devices = {
    'default': DefaultMockup,
    'iphone': IPhoneMockup,
    'android': AndroidMockup,
    'tablet': TabletMockup,
    'watch': WatchMockup,
    'desktop': DesktopMockup,
    'laptop': LaptopMockup 
}

const sizes = {
    "xs": .5,
    "sm": .75,
    "md": 1,
    "lg": 1.25,
    "xl": 1.5
}

export interface DeviceMockupProps {
    scale?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    type?: 'default' | 'iphone' | 'android' | 'tablet' | 'watch' | 'desktop' | 'laptop'
    children?: React.ReactNode;
}

const DeviceMockup = (props: DeviceMockupProps) => {
    const {children,type,size,scale} = props
    const deviceScaling = scale && scale > 0 ? scale: 1
    const sizeScaling = size ? sizes[size]: sizes['md']
    const totalScaling = deviceScaling * sizeScaling
    const Device = type ? devices[type]: devices['default']

    return(
        <View style={{ transform: [{ scale: totalScaling }] }}>
            <Device>
                <View style={{ transform: [{ scale: (1 / totalScaling) }] }}>
                    {children}
                </View>
            </Device>
        </View>
    )
}

export default DeviceMockup