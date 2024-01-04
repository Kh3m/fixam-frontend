import ProgressBar from "../../components/ProgressBar";

interface Props {
  label: string;
  value: number;
  progress: number;
}
const ReviewProgressLabel = ({ label, value, progress }: Props) => {
  return (
    <div className="flex space-x-4 font-medium justify-center items-center">
      <span className="basis-24">{label}</span>
      <div className="flex-grow">
        <ProgressBar progress={progress} />
      </div>
      <span className="basis-16 text-right">{value}</span>
    </div>
  );
};

export default ReviewProgressLabel;
