import React, { useState } from 'react';

function DateComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysToAdd, setDaysToAdd] = useState(0);
  const [monthsToAdd, setMonthsToAdd] = useState(0);
  const [resultDate, setResultDate] = useState(null);

  const getCurrentDate = () => {
    setCurrentDate(new Date());
  };

  const getDayAndMonth = () => {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are 0-based
    alert(`Day: ${day}, Month: ${month}`);
  };

  const addDays = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + daysToAdd);
    setResultDate(newDate);
  };

  const addMonths = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + monthsToAdd);
    setResultDate(newDate);
  };

  return (
    <div>
      <p>Current Date: {currentDate.toLocaleDateString()}</p>
      <button onClick={getCurrentDate}>Get Current Date</button>
      <br />
      <button onClick={getDayAndMonth}>Get Day and Month</button>
      <br />
      <label>Add Days: </label>
      <input
        type="number"
        value={daysToAdd}
        onChange={(e) => setDaysToAdd(parseInt(e.target.value) || 0)}
      />
      <button onClick={addDays}>Add Days</button>
      <br />
      <label>Add Months: </label>
      <input
        type="number"
        value={monthsToAdd}
        onChange={(e) => setMonthsToAdd(parseInt(e.target.value) || 0)}
      />
      <button onClick={addMonths}>Add Months</button>
      <br />
      {resultDate && <p>Result Date: {resultDate.toLocaleDateString()}</p>}
    </div>
  );
}

export default DateComponent;
