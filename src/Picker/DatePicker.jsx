import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { setDate } from "../slices/dateSlice";

const DatePicker = ({onSelect})=> {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const dispatch = useDispatch();

  const selectedDate = useSelector((state) => state.datepicker.selectedDate);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = [...Array(daysInMonth).keys()].map((day) => {
    const date = new Date(year, month, day + 1);
    return {
      day: day + 1,
      fullDate: date.toDateString(),
    };
  });

  const handleNextMonth = () => {
    setMonth((prevMonth) => {
      if (prevMonth === 11) {
        setYear((prevYear) => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  };

  const handlePrevMonth = () => {
    setMonth((prevMonth) => {
      if (prevMonth === 0) {
        setYear((prevYear) => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  };

  const firstDayOfMonth = new Date(year, month, 1);

  const startDay = (firstDayOfMonth.getDay() + 6) % 7;

  const emptyCells = Array.from({ length: startDay }, (_, i) => (
    <span key={`empty-${i}`} style={{ visibility: "hidden" }}>
      •
    </span>
  ));

  return (
    <section>
      <section className="calendar">
        <section className="calendar-header">
          <h3>
            {months[month]} {year}
          </h3>
          <section>
            <button onClick={handlePrevMonth}>
                 <Icon icon="si:chevron-left-duotone" color="#333333" height={20} width={20} />
            </button>
            <button onClick={handleNextMonth}>
             <Icon icon="mdi:chevron-right" color="#333333" height={20} width={20} />
             
            </button>
          </section>
        </section>

        <section className="calendar-subheader">
          {weekdays.map((day, index) => (
            <h3 key={index}>{day}</h3>
          ))}
        </section>

        <section className="calendar-days">
          {emptyCells}
          {daysArray.map(({ day, fullDate }) => (
            <span
              key={`${year}-${month + 1}-${day}`}
              style={{
                padding: "0.5em",
                border: "0.5em white",
                cursor: "pointer",
                background: selectedDate === fullDate ? "#FA8B02" : "white",
              }}
              onClick={() => {
                dispatch(setDate(fullDate));
                if (onSelect) onSelect(); 
              }}
            >
              {day}
            </span>
          ))}
        </section>
      </section>
    </section>
  );
}
export default DatePicker;

