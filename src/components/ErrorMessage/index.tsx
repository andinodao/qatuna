import React from "react";

export const ErrorMessage = ({ errors = [], className = "" }: {
  errors?: string[];
  className?: string;
}) => {
  if (errors.length > 0) {
    return (
      <div
        className={`text-red-500 text-left text-xs w-full mt-1 ${className}`}
      >
        {errors.join(", ")}
      </div>
    );
  }
  return null;
};
