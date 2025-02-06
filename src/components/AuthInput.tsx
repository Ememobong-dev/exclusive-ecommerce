import React from "react";

const AuthInput = ({ placeholder, inputOnChange, inputValue }: { placeholder: string; inputOnChange?: () => void; inputValue?: string;  }) => {
  return (
    <div>
      <input
        type="text"
        className="border-b-2 mb-5 py-3 bg-transparent  w-full  focus:outline-none outline-none"
        placeholder={placeholder}
        onChange={inputOnChange}
        value={inputValue}
      />
    </div>
  );
};

export default AuthInput;
