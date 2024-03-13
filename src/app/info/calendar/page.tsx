'use client'
import React, { useState } from "react";
import "./CalendarPage.css"; // Import CSS file for styling

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the current date
  const getCurrentDate = () => {
    return currentDate;
  };

  // Function to generate the calendar grid
  const generateCalendarGrid = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay(); // Sunday is 0, Monday is 1, etc.
    const daysInMonth = lastDayOfMonth.getDate();

    const calendarGrid = [];

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfWeek) {
          week.push({ day: '', inCurrentMonth: false });
        } else if (dayCount > daysInMonth) {
          week.push({ day: '', inCurrentMonth: false });
        } else {
          week.push({ day: dayCount, inCurrentMonth: true });
          dayCount++;
        }
      }
      calendarGrid.push(week);
      if (dayCount > daysInMonth) {
        break;
      }
    }

    return calendarGrid;
  };

  // Function to handle previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Function to handle next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div>
      <h1 className="calendar-heading">Calendar</h1>
      <div className="calendar">
        <div className="calendar-header">
          <button className="calendar-nav-button" onClick={goToPreviousMonth}>Previous</button>
          <h2 className="calendar-month">{getCurrentDate().toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <button className="calendar-nav-button" onClick={goToNextMonth}>Next</button>
        </div>
        <table className="calendar-grid">
          <thead>
            <tr>
              <th className="calendar-day">Sun</th>
              <th className="calendar-day">Mon</th>
              <th className="calendar-day">Tue</th>
              <th className="calendar-day">Wed</th>
              <th className="calendar-day">Thu</th>
              <th className="calendar-day">Fri</th>
              <th className="calendar-day">Sat</th>
            </tr>
          </thead>
          <tbody>
            {generateCalendarGrid().map((week, index) => (
              <tr key={index}>
                {week.map((day, index) => (
                  <td key={index} className={day.inCurrentMonth ? 'current-month calendar-date' : 'other-month calendar-date'}>
                    {day.day !== '' ? day.day : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
