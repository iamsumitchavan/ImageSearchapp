const ImageCard = (props: any) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="rounded-lg"
            src={props.largeImageURL}
            alt="image description"
          />

          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default ImageCard;
