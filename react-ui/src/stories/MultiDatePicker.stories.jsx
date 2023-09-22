import React, { useState } from 'react';
import MultiDatePicker from '../components/Requirements/DatePicker/MultiDatePicker';

export default {
  title: 'Date/MultiDatePicker',
  component: MultiDatePicker,
};

//Usage of component
export const MultiDatePickerDefault = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleStartDateChange = (date) => {
      setStartDate(date);
  }

  const handleEndDateChange = (date) => {
    setEndDate(date);
    
  }
  console.log("startDate",startDate)
  console.log("endDate",endDate)
  return (
    <MultiDatePicker
      color="lightblue"
      startselectedDate={startDate}
      endselectedDate={endDate}
      onStartDateChange={handleStartDateChange}
      onEndDateChange={handleEndDateChange}
      startDateLabel= {"Start Range"}
      endDateLabel= {"End Range"}
    />
    
  );
};
