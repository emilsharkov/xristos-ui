import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addWeeks } from 'date-fns'

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const isSameDate = (date1: Date, date2: Date) => {
  const isSameDate = 
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  return isSameDate
}

const getCalendarWeeks = (date: Date) => {
    const firstDayOfMonth = startOfMonth(new Date(date.getFullYear(),date.getMonth()))
    const lastDayOfMonth = endOfMonth(firstDayOfMonth)
  
    let startOfWeekPointer = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 })
    const endOfWeekPointer = endOfWeek(lastDayOfMonth, { weekStartsOn: 0 })
  
    const weeks = []
    while (startOfWeekPointer <= endOfWeekPointer) {
      const endOfWeekDate = endOfWeek(startOfWeekPointer, { weekStartsOn: 0 })
      const week = eachDayOfInterval({ start: startOfWeekPointer, end: endOfWeekDate })
      weeks.push(week)
      startOfWeekPointer = addWeeks(startOfWeekPointer, 1)
    }
    return weeks
}

export {isSameDate,daysOfWeek,getCalendarWeeks}