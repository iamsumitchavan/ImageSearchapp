import { useEffect, useCallback } from "react";
import { GetAllResponse } from "../Api";
import { GetAllImages, GetQueryAction } from "../action";
import { State } from "../Reducer/Store";
import { ShowImagesSelectors, ShowQuerySelector } from "../selectors/ShowImage";
import { connect } from "react-redux";
import ImageModel from "../models";
import { FC } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

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

  const handleChange = useCallback(
    (e: any) => {
      queryAction(e.target.value);
    },
    [query]
  );

  return (
    <>
      <div>
        <SearchBar value={query} onChange={handleChange} />

        <div className="flex flex-row flex-wrap gap-5 py-5 justify-center h-screen">
          {Images ? (
            Images.map((p: ImageModel) => (
              <div key={p.id}>
                <ImageCard {...p} />
              </div>
            ))
          ) : (
            <Loading />
          )}
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
