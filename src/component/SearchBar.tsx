import { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div>
      <div className="py-4 flex justify-center ">
        <input
          {...props}
          type="text"
          className="border border-solid border-neutral-300 bg-transparent shadow-md  py-1  rounded-sm w-3/5 bg-clip-padding text-base font-normal outline-none px-3 focus:border-fuchsia-600 focus:border-2"
          placeholder="search images shows here"
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-white py-1 w-3/5 rounded-sm ">
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
