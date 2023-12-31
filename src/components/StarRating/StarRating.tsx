// StarRating.tsx
import React, { ChangeEvent, InputHTMLAttributes } from "react";
import "./StarRating.css"; // Import your CSS file
import { useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const StarRating: React.FC = ({ ...props }: Props) => {
  const { setValue } = useFormContext();

  const handleStarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value);
    setValue("rating", value);
  };

  return (
    <div className="center">
      <fieldset className="rating">
        {/* [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5] */}
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              {...props}
              type="radio"
              id={`star${value}`}
              name="rating"
              value={value}
              onChange={handleStarChange}
            />
            <label
              htmlFor={`star${value}`}
              className={`${Number.isInteger(value) ? "full" : "half"}`}
              title="Awesome"
            ></label>
          </React.Fragment>
        ))}
      </fieldset>
    </div>
  );
};

export default StarRating;
