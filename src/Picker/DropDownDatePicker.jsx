import { useState } from "react";
import { Icon } from "@iconify/react";
import { selectedDate } from "../slices/dateSlice";
import DatePicker from '../Picker/DatePicker'
const DropDownDatePicker = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  return(
<section className="datepicker-wrapper" onClick={()=> setIsCalendarOpen(!isCalendarOpen)}>
      
        <Icon icon="solar:calendar-linear" color="#FA8B02" width={20} />
        <span>{selectedDate || "Choose a date"}</span>
          <Icon icon="tabler:chevron-down" />
      
      {isCalendarOpen && (
          <DatePicker onSelect={() => setIsCalendarOpen(false)} />
        )}
</section>
  )
}
export default DropDownDatePicker;