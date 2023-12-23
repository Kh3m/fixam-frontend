const HR = ({ styles }: { styles?: string }) => {
  return (
    <div className={`${styles} h-[1px] w-full rounded-md bg-black/50`}></div>
  );
};

export default HR;
