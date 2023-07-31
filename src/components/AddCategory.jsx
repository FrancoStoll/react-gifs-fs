import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
 
 const onInputChange = (e) => {
    setInputValue(e.target.value);


 }

 const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    
    onNewCategory( inputValue.trim() );
    setInputValue('');
 }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" placeholder="Search Gif" value={inputValue} onChange={ (e) => onInputChange(e) } />
    </form>
  );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func, // Cambia 'func' por el tipo adecuado si 'onNewCategory' no es una función.
  };
  
