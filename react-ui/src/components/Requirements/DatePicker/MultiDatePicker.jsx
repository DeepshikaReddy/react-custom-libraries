import React , {useState,useEffect} from "react";
import './MultiDatePicker.css'
import Modal from 'react-modal';

/**
 * 
 * @author Deepshika Reddy Annam Gunasekaran
 */

//This component gives a multi-date picker for start and end date.
const MultiDatePicker = ({color , format, startselectedDate, endselectedDate, onStartDateChange, onEndDateChange,startDateLabel, endDateLabel}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

   const handlestartDateChange = (e) =>{
    const startDate = e.target.value
    if(startDate && (endselectedDate===null ||endselectedDate== undefined)){
        onStartDateChange(startDate);
    }else{
        if(startDate > endselectedDate){
        onStartDateChange(null);
        }else{ 
        onStartDateChange(startDate);
        }
    }
   }

   //function to compare start and end dates.
   const dateCompare = (endDate) => {
    if(startselectedDate && endDate){
        const startDateParts = startselectedDate.split("-");
        const startYear = parseInt(startDateParts[0], 10);
        const startMonth = parseInt(startDateParts[1], 10) - 1;
        const startDay = parseInt(startDateParts[2], 10);
        const startDateObj = new Date(startYear, startMonth, startDay);

        const endDateParts = endDate.split("-");
        const endYear = parseInt(endDateParts[0], 10);
        const endMonth = parseInt(endDateParts[1], 10) - 1;
        const endDay = parseInt(endDateParts[2], 10);
        const endDateObj = new Date(endYear, endMonth, endDay);
        if (startDateObj > endDateObj) {
            return -1;
          } else if (startDateObj < endDateObj) {
            return -2;
          } else {
            return 1 ;
          }

    }

   }

   //endselectedDate
   useEffect(() => {
    if (endselectedDate === null) {
       // alert("Start Date is greater than or equal to End date")
        setModalIsOpen(true);
    }
  }, [endselectedDate]);

  //startselectedDate
  useEffect(() => {
    if (startselectedDate === null) {
        //alert("Start Date is greater than or equal to End date")
        setModalIsOpen(true);
    }
  }, [startselectedDate]);

  const closeModal = () => {
    setModalIsOpen(false);
  };


  //onchange for enddate
    const handleendDateChange = (e) =>{
    const date = e.target.value
    const result = dateCompare(date)
    if(result){
        if(result==-1 || result ==1){ 
            onEndDateChange(null);
        }
        if(result == -2){
            onEndDateChange(date);
          }
    
   }
}

   //custom color change for component
   const style = {
    backgroundColor: color ,
   }

   return(
    <div className="container">
        <div className="left-div" style={style}>
        <label htmlFor="startDate">{startDateLabel+ " :"}</label>
        <input
        className="datepicker-input"
        type="date"
        value= {startselectedDate ?startselectedDate : ''}
        onChange={handlestartDateChange}
        placeholder={format}
        />
    </div>
    <div className="right-div" style={style}>
    <label htmlFor="startDate">{endDateLabel + " :"}</label>
        <input
        className="datepicker-input"
        type="date"
        value= {endselectedDate ? endselectedDate : ''}
        onChange={handleendDateChange}
        placeholder={format}
        />
    </div>
    <Modal
        className="custom-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div class="customalert">
          <h3>Error</h3>
          <p class ="error-heading">Start Date is greater than or equal to End date</p>
          <button style={style} class="close" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
    
   )

}
export default MultiDatePicker;