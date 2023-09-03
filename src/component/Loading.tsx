import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { memo } from "react";
const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div>
          <AiOutlineLoading3Quarters className="text-5xl font-bold animate-spin" />
        </div>
      </div>
    </div>
  );
};
export default memo(Loading);
