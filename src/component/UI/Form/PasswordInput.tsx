import React, { useState } from 'react';

// PasswordInput Component
const PasswordInput: React.FC<{ label: string }> = ({ label }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        type="password"
        id={label}
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default PasswordInput;
