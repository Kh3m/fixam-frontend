import { useState } from "react";

interface Props {
  message: string;
  type: "green" | "error";
  shoudlShowToast?: boolean;
}
const ToastMessage = ({ message, type, shoudlShowToast }: Props) => {
  const [showToast, setShowToast] = useState(shoudlShowToast);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const toastTypeStyle = {
    green: "text-green-400 border-green-600 bg-green-200",
    error: "text-red-400 border-red-600 bg-red-200",
  };

  const toastCloseStyle = {
    green: "text-green-200 bg-green-300",
    error: "text-red-200 bg-red-300",
  };

  return (
    <>
      {showToast && (
        <div
          className={`${toastTypeStyle[type]} p-2 rounded-md my-1 flex items-center justify-between`}
        >
          <span>{message}</span>
          <span
            onClick={handleCloseToast}
            className={`${toastCloseStyle[type]} inline-flex items-center justify-center 
            cursor-pointer h-4 w-4 text-xs rounded-sm`}
          >
            x
          </span>
        </div>
      )}
    </>
  );
};

export default ToastMessage;
