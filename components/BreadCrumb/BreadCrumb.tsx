import { Children, Fragment } from "react";
import { BreadCrumbRouteProps } from "./BreadCrumbRoute";
import { View } from "react-native";
import Arrow from './icons/arrow.svg'


export interface BreadCrumbProps {
    children?: React.ReactElement<BreadCrumbRouteProps>[] | React.ReactElement<BreadCrumbRouteProps>
}

const BreadCrumb = (props: BreadCrumbProps) => {
    const {children} = props

    return (
        <View
            className={`flex flex-row`}
        >
            {Children.map(children, (child, index) => (
                <Fragment key={index}>
                    {child}
                    {index !== Children.count(children) - 1 ? <Arrow className='w-4 h-4 text-black'/>: null}
                </Fragment>
            ))}
        </View>
    )
}

export default BreadCrumb