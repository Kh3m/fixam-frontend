const LoadingFixam = () => {
  return (
    <div className=" h-screen flex justify-center my-20 ">
      <div
        className="rounded-full h-32 w-32 flex justify-center items-center font-bold  
      
      animate-bounce 
      'animate-spin 
      'animate-pulse

      border-fyellow border-solid 
      'border-2 
      'border-r-transparent 
      'border-l-transparent
      
      border-t-4 border-t-[#4054B2] border-b-4 border-b-fyellow
      "
      >
        <div className="opacity-80">
          <span className="text-fyellow">Fix</span>
          <span className="text-[#4054B2]">am</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingFixam;
