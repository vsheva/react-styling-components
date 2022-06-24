import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
   if(event.target.value.trim().length > 0) {
       setIsValid(true)  //почему мы не используем переменныую потом isValid для переиспользования
   }                          //при вводу убираем фон
      setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
      setIsValid(false)
    if(enteredValue.trim().length===0) {
      return
    }
    props.onAddGoal(enteredValue);
  };

  console.log(isValid)
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:!isValid ? "red" : "black"}}>Course Goal</label>
        <input style={{borderColor:!isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent"}}
               value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
