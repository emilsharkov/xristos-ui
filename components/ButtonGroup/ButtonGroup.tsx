import { Children, Fragment, cloneElement, isValidElement } from "react";
import { View,Text } from "react-native";
import { ButtonGroupItemProps } from "./ButtonGroupItem";


export interface ButtonGroupProps {
    children: React.ReactElement<ButtonGroupItemProps>[] | React.ReactElement<ButtonGroupItemProps>
}

const ButtonGroup = (props: ButtonGroupProps) => {
    const {children} = props

    return (
        <View
            className={`inline-flex rounded-md shadow-sm flex-row`}
        >
            {Children.map(children, (child, index) => (
                <Fragment key={index}>
                    {cloneElement(child,{
                        isFirst: index === 0,
                        isLast: index === Children.count(children) - 1,
                    })}
                </Fragment>
            ))}
        </View>
    )
}

export default ButtonGroup