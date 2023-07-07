import { useState } from 'react';
import BookingDetails from '../components/BookingDetails';
import Seat from '../components/Seat';

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
      isDisabled: Math.random() > 0.5 ? false : true,
      date: nextDay.toLocaleString('en-GB', options),
    });
  }
  console.log(nextDays);
  return nextDays;
}

export function SelectTime() {
  const availableDates = generateAvailableDates(8);

  const handleDateClick = clickedDate => {
    const updatedDates = availableDates.map(date => {
      if (date.date === clickedDate) {
        return {
          ...date,
          isActive: !date.isActive, // Toggle the isActive property
        };
      }
      return date;
    });

    // Update the state or perform any other actions with the updatedDates array
    // For example, you can use useState or dispatch an action in a Redux store
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
            onClick={() => {}}
          >
            {date.date}
          </BookingDetails>
        ))}
        <Seat
          seatid={1}
          isSelected={false}
          onClick={e => console.log(e.target)}
        />
      </div>
    </div>
  );
}
