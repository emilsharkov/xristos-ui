export interface PopoverTriggerProps {
    children?: React.ReactNode;
}

const PopoverTrigger = (props: PopoverTriggerProps) => {
    const {children} = props

    return (
        <>{children}</>
    )
}

export default PopoverTrigger