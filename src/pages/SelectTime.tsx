import { useState } from 'react';
import BookingDetails from '../components/BookingDetails';

type DateType = {
  isActive: boolean;
  isDisabled: boolean;
  date: string;
};

function generateAvailableDates(numberOfDays: number) {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };
  const nextDays: DateType[] = [];
  for (let i = 0; i <= numberOfDays - 1; i++) {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    nextDays.push({
      isActive: false,
      // randomly disable certain dates
      isDisabled: Math.random() > 0.3 ? false : true,
      date: nextDay.toLocaleString('en-GB', options),
    });
  }
  console.log(nextDays);
  return nextDays;
}

export function SelectTime() {
  const [availableDates, setAvailableDates] = useState(
    generateAvailableDates(8)
  );
  const handleDateClick = (clickedDate: string) => {
    const updatedDates = availableDates.map(date => {
      if (date.date === clickedDate && !date.isDisabled) {
        // Toggle the isActive property if the date is not disabled
        return {
          ...date,
          isActive: !date.isActive,
        };
      } else {
        // Set rest of the dates inactive
        if (date.isActive)
          return {
            ...date,
            isActive: false,
          };
      }
      return date;
    });
    setAvailableDates(updatedDates);
  };

  return (
    <div className="h-full w-full px-5 py-8">
      <div className="grid grid-cols-4 gap-y-4">
        {availableDates.map(date => (
          <BookingDetails
            key={date.date}
            isActive={date.isActive}
            isDisabled={date.isDisabled}
            onClick={() => handleDateClick(date.date)}
          >
            {date.date}
          </BookingDetails>
        ))}
      </div>
    </div>
  );
}
