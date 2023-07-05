import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
import '../styles/utils/floatingInput.css';

const FloatingInput = ({ label, type, ...rest }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value && !rest.selected) {
      setFocused(false);
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value) {
      setFocused(true);
    }
  }, [value]);

  const renderInput = () => {
    if (type === 'text') {
      return (
        <input
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={handleInputChange}
          {...rest}
        />
      );
    } else if (type === 'datepicker') {
      return (
        <DatePicker
            className="input-field"
            selected={rest.selected}
            onChange={rest.onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            locale={ptBR}
            dateFormat="dd/MM/yyyy"
            {...rest}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className={`floating-input ${focused ? 'focused' : ''}`}>
      {renderInput()}
      <label className={`input-label ${focused || value || rest.selected ? 'float' : ''}`}>
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
