import { useState, createContext } from "react";

const TimeContext = createContext();
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
  "December"
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function TimeContextProvider({ children }) {
  const d = new Date();

  const [time, setTime] = useState(`${(d.getHours().length === 1 && "0")} ${d.getHours()}:${d.getMinutes()}`);
  const [date, setDate] = useState({
    date: d.getDate(),
    day: days[d.getDay()],
    month: months[d.getMonth()],
    year: d.getFullYear()
  });

  return (
    <TimeContext.Provider value={{ d, time, date, setTime, setDate }}>
      {children}
    </TimeContext.Provider>
  );
}

export { TimeContext, TimeContextProvider };
