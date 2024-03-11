import { View,Text, TouchableOpacity } from "react-native"
import { daysOfWeek, getCalendarWeeks, isSameDate } from "./CalendarUtils"
import CalendarRow from "./CalendarRow"
import { useEffect, useState } from "react"
import MonthPicker from "./MonthPicker"
import ChevronDown from './icons/chevron-down.svg'
import ChevronUp from './icons/chevron-up.svg'
import YearPicker from "./YearPicker"

export interface CalendarProps {
    mode: 'single' | 'range';
    defaultDate?: Date;
    onSelect?: (dates: Date[]) => void;
    yearRange?: number[]
}

const Calendar = (props: CalendarProps) => {
    const {mode,defaultDate,onSelect,yearRange} = props
    const date = defaultDate ?? new Date()
    const [currentMonthDate,setCurrentMonthDate] = useState<Date>(new Date(date.getFullYear(),date.getMonth()))
    const [selectedDates,setSelectedDates] = useState<Date[]>([])
    const [showYears,setShowYears] = useState<boolean>(false)

    const YearsChevron = showYears ? ChevronUp: ChevronDown
    const calendarWeeks = getCalendarWeeks(currentMonthDate)
    const calendarHeading = currentMonthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    useEffect(() => {
        if(onSelect) {
            onSelect(selectedDates)
        }
    },[selectedDates])

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
            throw new Error('This should only have up to 2 items')
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

                <View className="flex-1 justify-center items-center">
                    <TouchableOpacity 
                        className="w-max flex-row items-center justify-center"
                        onPress={() => setShowYears(!showYears)}
                    >
                        <Text className="text-center text-base font-medium relative">
                            {calendarHeading}
                        </Text>
                        <YearsChevron className="w-4 h-4 text-black relative left-1.5"/>
                    </TouchableOpacity>
                </View>
                
                <MonthPicker
                    month="next"
                    currentMonthDate={currentMonthDate}
                    setCurrentMonthDate={setCurrentMonthDate}
                />
            </View>
            
            {showYears ? (
                    <View className="w-full aspect-square">
                        <YearPicker
                            yearRange={yearRange}
                            setShowYears={setShowYears}
                            currentMonthDate={currentMonthDate}
                            setCurrentMonthDate={setCurrentMonthDate}
                        />
                    </View>
                ): (
                <>
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
                </>
            )}
        </View>
    )
}

export default Calendar