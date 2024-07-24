import React from 'react';
import style from './CustomInput.module.css'

interface InputFieldProps {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type = 'text', name, placeholder, value, onChange }) => {
  return (
    <input 
      type={type} 
      name={name}
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      className={style.input}
    />
  );
};

export default InputField;
