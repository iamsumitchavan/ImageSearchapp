import { memo } from "react";
const ImageCard = (props: any) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="rounded-lg w-96 h-80"
            src={props.largeImageURL}
            alt="image description"
          />

          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>{props.tags}</p>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default memo(ImageCard);
