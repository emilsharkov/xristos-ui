import { View,Text, TouchableOpacity } from "react-native"
import { isSameDate } from "./CalendarUtils";
import { Fragment } from "react";

export interface CalendarRowProps {
    selectedDates: Date[];
    calendarWeek: Date[];
    currentMonthDate: Date;
    onSelect?: (dates: Date[]) => void;
    onPress: (date: Date) => void;
}

const CalendarRow = (props: CalendarRowProps) => {
    const {selectedDates,calendarWeek,currentMonthDate,onPress} = props
    console.log(selectedDates)
    
    const dayTextStyle = (date: Date) => {
        return currentMonthDate.getMonth() != date.getMonth() ? '!text-gray-300': ''
    }

    const todayCellStyle = (date: Date) => {
        const today = new Date()
        return isSameDate(date,today) ? 'bg-gray-100': ''
    }

    const selectedCellStyle = (date: Date) => {
        let style = null

        if(selectedDates.length === 1 && isSameDate(date,selectedDates[0])) {
            style = 'bg-primary rounded-md'
        } else if(selectedDates.length === 2 && selectedDates[1] >= date && date >= selectedDates[0]) {
            if(isSameDate(date,selectedDates[0])){
                style = 'bg-primary !rounded-l-md'
            } else if(isSameDate(date,selectedDates[1])){
                style = 'bg-primary !rounded-r-md'
            } else {
                style = 'bg-primary !rounded-none'
            }
        } else {
            style = 'bg-white hover:bg-gray-100 rounded-md'
        }

        return style
    } 
        
    const selectedTextStyle = (date: Date) => {
        let style = null

        if(selectedDates.length === 1 && isSameDate(date,selectedDates[0])) {
            style = 'text-white'
        } else if(selectedDates.length === 2 && selectedDates[1] >= date && date >= selectedDates[0]) {
            style = 'text-white'
        } else {
            style = 'text-black'
        }

        return style
    }

    return(
        <View className="w-full flex flex-row">
            {calendarWeek.map((day: Date,index: number) => {
                return <>
                    <View
                        key={day.toISOString() + index} 
                        className={`${selectedCellStyle(day)} ${todayCellStyle(day)} aspect-square flex-1`}
                    >
                        <TouchableOpacity
                            className="w-full aspect-square flex items-center justify-center"
                            onPress={() => onPress(day)}
                        >
                            <Text className={`${selectedTextStyle(day)} ${dayTextStyle(day)} text-center`}>
                                {day.getDate()}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            })}
        </View>
    )
}

export default CalendarRow