import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native";
import { createYearsList } from "./CalendarUtils";

export interface YearPickerProps {
    yearRange?: number[];
    currentMonthDate: Date;
    setCurrentMonthDate: (date: Date) => void;
    setShowYears: (bool: boolean) => void;
}

const YearPicker = (props: YearPickerProps) => {
    const {yearRange,currentMonthDate,setCurrentMonthDate,setShowYears} = props
    const currentYear = (new Date()).getFullYear()
    const yearsList = yearRange && yearRange.length === 2 && yearRange[0] < yearRange[1] 
        ? createYearsList(yearRange[0], yearRange[1])
        : createYearsList(1900, currentYear);

    const pressYear = (year: number) => {
        const newCurrentMonthDate = new Date(year,currentMonthDate.getMonth())
        setCurrentMonthDate(newCurrentMonthDate)
        setShowYears(false)
    }

    return (
        <FlatList
            className="pt-1"
            data={yearsList}
            renderItem={({item,index}) => {
                return <>
                    <TouchableOpacity
                        key={item}
                        onPress={() => pressYear(item)}
                        className="w-full h-14 flex flex-col justify-center items-center"
                    >
                        <Text className="relative w-1/2 text-center text-lg">
                            {item}
                        </Text>
                        {index !== yearsList.length - 1 ? <View className="absolute bottom-0 w-1/2 bg-black h-[0.5px]"/>: null}                    
                    </TouchableOpacity>
                </>
            }}
        />
    )
}

export default YearPicker