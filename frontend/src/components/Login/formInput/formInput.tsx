import React from 'react';
import './forminput.css'

interface FormInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clickOffFunc?: () => void;
  clickOffWhenEntered?: boolean;
}



function FormInput({
  label,
  type = 'text',
  value,
  onChange,
  clickOffFunc = () => {},
  clickOffWhenEntered = true, 
}: FormInputProps) {
  return (
    <div className = 'outer-login-input'>
      <label>
        {label}
        <input
          className = 'login-input'
          type={type}
          value={value}
          onChange={onChange}
          onBlur={clickOffFunc}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              e.preventDefault(); 
              clickOffFunc(); 
            }
        
        }}
        />
      </label>
    </div>
  );
}

export default FormInput;