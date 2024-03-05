import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native";
import { createYearsList } from "./CalendarUtils";

export interface YearPickerProps {
    currentMonthDate: Date;
    setCurrentMonthDate: (date: Date) => void;
    setShowYears: (bool: boolean) => void;
    start?: number;
    end?: number;
}

const YearPicker = (props: YearPickerProps) => {
    const {currentMonthDate,setCurrentMonthDate,setShowYears,start,end} = props
    const currentYear = (new Date()).getFullYear()
    const yearsList = start && end && start < end ? createYearsList(start,end): createYearsList(1900,currentYear)
    

    const pressYear = (year: number) => {
        const newCurrentMonthDate = new Date(year,currentMonthDate.getMonth())
        setCurrentMonthDate(newCurrentMonthDate)
        setShowYears(false)
    }

    return (
        <FlatList
            className="pt-1"
            data={yearsList}
            renderItem={({item}) => {
                return <>
                    <TouchableOpacity
                        key={item}
                        onPress={() => pressYear(item)}
                        className="w-full h-14 flex flex-col justify-center items-center"
                    >
                        <Text className="relative w-1/2 text-center text-lg">
                            {item}
                        </Text>
                        <View
                            className="absolute bottom-0 w-1/2 bg-black h-[0.5px]"
                        />
                    </TouchableOpacity>
                </>
            }}
        />
    )
}

export default YearPicker