import { ArrowRight } from 'lucide-react';
import { forwardRef } from 'react';
import { ButtonBlrProps } from '../../types/types';


const ButtonBlr = forwardRef<HTMLButtonElement, ButtonBlrProps>(
  (
    {
      title,
      iconLeft,
      iconRight,
      loading = false,
      loadingText = 'Loading...',
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref=  {ref}
        type="button" // 👉 KEY: Prevents accidental form submission
        disabled={isDisabled}
        {...props}
        className={`
          group relative bg-teal-600/70 backdrop-blur-sm
          border border-white/30 text-white 
          px-8 py-4 rounded-lg 
          hover:bg-teal-600 
          disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-300 
          flex items-center justify-center space-x-3 
          ${className}
        `}
      >
        {loading ? (
          <>
            {loadingText && <span className="font-light tracking-wide">{loadingText}</span>}
            <svg
              className="w-5 h-5 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </>
        ) : (
          <>
            {iconLeft && <span className="flex">{iconLeft}</span>}
            {children ? children : <span className="font-light tracking-wide">{title}</span>}
            {iconRight ? (
              <span className="flex">{iconRight}</span>
            ) : (
              !iconLeft && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            )}
          </>
        )}
      </button>
    );
  }
);

ButtonBlr.displayName = 'ButtonBlr';

export default ButtonBlr;
