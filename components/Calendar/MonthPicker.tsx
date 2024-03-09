import ChevronRight from './icons/chevron-right.svg'
import ChevronLeft from './icons/chevron-left.svg'
import Button from '../Button/Button';
import { addMonths } from 'date-fns';

export interface MonthPickerProps {
    month: 'previous' | 'next';
    currentMonthDate: Date;
    setCurrentMonthDate: (newMonth: Date) => void;
}

const MonthPicker = (props: MonthPickerProps) => {
    const {month,currentMonthDate,setCurrentMonthDate} = props
    const Icon = month === 'next' ? ChevronRight: ChevronLeft
    const monthAdjustment = month === 'next' ? 1: -1

    return(
        <Button
            styling='w-[12%] !h-auto !aspect-square !p-1'
            onPress={() => setCurrentMonthDate(addMonths(currentMonthDate,monthAdjustment))}
        >
            <Icon className='w-full aspect-square text-white'/>
        </Button>
    )
}

export default MonthPicker