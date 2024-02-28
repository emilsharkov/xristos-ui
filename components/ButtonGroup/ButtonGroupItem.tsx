import { Text, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";

export interface ButtonGroupItemProps {
    icon?: React.FC<SvgProps>;
    name: string;
    onPress: () => void;
    isFirst?: boolean;
    isLast?: boolean;
}

const ButtonGroupItem = (props: ButtonGroupItemProps) => {
    const {icon: Icon,name,onPress,isFirst,isLast} = props
    const isFirstClass = isFirst ? 'rounded-l-lg': ''
    const isLastClass = isLast ? 'rounded-r-lg': ''
    const notFirstLastClass = !isFirst && !isLast ? 'border-t border-b': 'border'

    return (
        <TouchableOpacity
            className={`${isFirstClass} ${isLastClass} ${notFirstLastClass} flex flex-row px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
            onPress={onPress}
        >
            {Icon ? <Icon className="text-black w-4 h-4 mr-2"/>: null}
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default ButtonGroupItem