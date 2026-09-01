import React from 'react';

interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  id?: string;
}

export function Input({
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  className = '',
  id,
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label 
        htmlFor={inputId}
        className="text-sm font-medium text-slate-900"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`
          bg-white border rounded-lg px-4 py-2
          focus:outline-none focus:ring-2 focus:border-transparent
          transition-all duration-200
          ${error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-slate-300 focus:ring-emerald-500'
          }
        `}
      />
      {error && (
        <span className="text-sm text-red-600">{error}</span>
      )}
    </div>
  );
}
