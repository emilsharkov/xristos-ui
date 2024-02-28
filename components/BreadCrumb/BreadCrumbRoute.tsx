import { Text, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";

export interface BreadCrumbRouteProps {
    icon?: React.FC<SvgProps>;
    route: string;
    onPress: () => void;
}

const BreadCrumbRoute = (props: BreadCrumbRouteProps) => {
    const {icon: Icon,route,onPress} = props
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View
                className={`flex flex-row`}
            >
                {Icon ? <Icon className="text-black w-4 h-4 mr-2"/>: null}
                <Text>{route}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BreadCrumbRoute