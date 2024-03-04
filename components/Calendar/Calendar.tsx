import { View,Text } from "react-native"
import { daysOfWeek, getCalendarWeeks, isSameDate } from "./CalendarUtils"
import CalendarRow from "./CalendarRow"
import { useState } from "react"
import MonthPicker from "./MonthPicker"

export interface CalendarProps {
    mode?: 'single' | 'range';
    defaultDate: Date;
    onSelect?: (dates: Date[]) => void;
}

const Calendar = (props: CalendarProps) => {
    const {mode,defaultDate,onSelect} = props
    const [currentMonthDate,setCurrentMonthDate] = useState<Date>(new Date(defaultDate.getFullYear(),defaultDate.getMonth()))
    const [selectedDates,setSelectedDates] = useState<Date[]>([])
    const calendarWeeks = getCalendarWeeks(currentMonthDate)
    const calendarHeading = currentMonthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    const onPress = (date: Date) => {
        if(selectedDates.length === 0) {
            setSelectedDates([date])
        } else if(selectedDates.length === 1) {
            if(isSameDate(selectedDates[0],date)) {
                setSelectedDates([])
            } else {
                if(mode === "single"){
                    setSelectedDates([date])
                } else {
                    const dates = [selectedDates[0],date].sort()
                    dates.sort((a, b) => a.getTime() - b.getTime())
                    setSelectedDates(dates)
                }
            }
        } else if(selectedDates.length === 2) {
            setSelectedDates([])
        } else {
            // throw new Error('This should only have up to 2 items')
        }
    }

    return(
        <View className="flex flex-col w-full shadow-lg border rounded-md p-3 border-[#e5e7eb] bg-white">
            <View className="flex flex-row w-full">
                <MonthPicker
                    month="previous"
                    currentMonthDate={currentMonthDate}
                    setCurrentMonthDate={setCurrentMonthDate}
                />
                <View className="flex-1 self-center">
                    <Text className="text-center">{calendarHeading}</Text>
                </View>
                <MonthPicker
                    month="next"
                    currentMonthDate={currentMonthDate}
                    setCurrentMonthDate={setCurrentMonthDate}
                />
            </View>
            <View className="w-full flex flex-row">
                {daysOfWeek.map((day: string, index: number) => {
                    return <>
                        <View key={day} className="aspect-square flex-1 flex items-center justify-center rounded">
                            <Text className="text-center text-gray-500">
                                {day.slice(0,2)}
                            </Text>
                        </View>
                    </>
                })}
            </View>
            <View className="w-full flex flex-col">
                {calendarWeeks.map((calendarWeek: Date[], index: number) => {
                    return (
                        <View className="py-[0.75]">
                            <CalendarRow
                                key={calendarWeek[0].toISOString()}
                                selectedDates={selectedDates}
                                calendarWeek={calendarWeek}
                                currentMonthDate={currentMonthDate}
                                onSelect={onSelect}
                                onPress={onPress}
                            />
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default Calendar