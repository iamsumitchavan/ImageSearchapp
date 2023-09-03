import { useEffect } from "react";
import { GetAllResponse } from "../Api";
import { GetAllImages, GetQueryAction } from "../action";
import { State } from "../Reducer/Store";
import { ShowImagesSelectors, ShowQuerySelector } from "../selectors/ShowImage";
import { connect } from "react-redux";
import ImageModel from "../models";
import { FC } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";

export type ShowDataActionProps = {
  queryAction: (query: string) => void;
  ImagesAction: (Images: ImageModel[]) => void;
  query: string;
  Images: ImageModel[];
};

const ShowData: FC<ShowDataActionProps> = ({
  queryAction,
  ImagesAction,
  query,
  Images,
}) => {
  useEffect(() => {
    GetAllResponse(query).then((response) => {
      return ImagesAction(response);
    });
  }, [query]);

  return (
    <>
      <div>
        <SearchBar
          value={query}
          onChange={(event) => queryAction(event.target.value)}
        />
        <div className="flex flex-row flex-wrap gap-5 py-5 justify-center">
          {Images &&
            Images.map((p: ImageModel) => (
              <div key={p.id}>
                <ImageCard {...p} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  queryAction: GetQueryAction,
  ImagesAction: GetAllImages,
};

const mapStateToProps = (state: State) => {
  return {
    query: ShowQuerySelector(state),
    Images: ShowImagesSelectors(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowData);
