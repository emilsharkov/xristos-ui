import AndroidMockup from "./AndroidMockup";
import DefaultMockup from "./DefaultMockup";
import DesktopMockup from "./DesktopMockup";
import IPhoneMockup from "./IPhoneMockup";
import LaptopMockup from "./LaptopMockup";
import TabletMockup from "./TabletMockup";
import WatchMockup from "./WatchMockup";

const devices = {
    'default': DefaultMockup,
    // 'iphone': IPhoneMockup,
    'android': AndroidMockup,
    // 'tablet': TabletMockup,
    // 'watch': WatchMockup,
    // 'desktop': DesktopMockup,
    // 'laptop': LaptopMockup 
}

export interface DeviceMockupProps {
    type?: 'default' | 'android'
    // type?: 'default' | 'iphone' | 'android' | 'tablet' | 'watch' | 'desktop' | 'laptop'
    children?: React.ReactNode;
}

const DeviceMockup = (props: DeviceMockupProps) => {
    const {children,type} = props
    const Device = type ? devices[type]: devices['default']

    return(
        <Device>
            {children}
        </Device>
    )
}

export default DeviceMockup