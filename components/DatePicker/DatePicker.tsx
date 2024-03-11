import Button from "../Button/Button"
import Calendar, { CalendarProps } from "../Calendar/Calendar"
import Popover, { PopoverProps } from "../Popover/Popover"
import PopoverContent from "../Popover/PopoverContent"
import PopoverTrigger from "../Popover/PopoverTrigger"
import Dates from "./date.svg"
import { Text, View } from "react-native"

export interface DatePickerProps extends PopoverProps,CalendarProps {

}

const DatePicker = (props: DatePickerProps) => {
    const {position,z,defaultDate,mode,yearRange,onSelect} = props

    return (
        <Popover 
            z={z}
            position={position} 
        >
            <PopoverTrigger>
                <Button variant='outline'>
                    <View className="flex flex-row flex-start w-full">
                        <Dates className="h-4 w-4 mr-2"/>
                        <Text>Pick a date</Text>
                    </View>
                </Button>
            </PopoverTrigger>
            <PopoverContent >
                <Calendar
                    onSelect={onSelect}
                    yearRange={yearRange}
                    mode={mode}
                    defaultDate={defaultDate}
                />
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker