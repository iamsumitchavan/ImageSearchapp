import { useCallback } from "react";

import { GetQueryAction } from "../action";
import { State } from "../Reducer/Store";
import { ShowImagesSelectors, ShowQuerySelector } from "../selectors/ShowImage";
import { connect, ConnectedProps } from "react-redux";
import ImageModel from "../models";
import { FC } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import NotFound from "./NotFound";

export type ShowDataActionProps = {} & ReduxProps;

const ShowData: FC<ShowDataActionProps> = ({
  queryAction,

  query,
  Images,
}) => {
  console.log("images is", Images);
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
        <div>
          {Images.length === 0 && (
            <div>
              <NotFound />
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap gap-5 py-5 justify-center h-screen scroll-smooth">
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
};

const mapStateToProps = (state: State) => {
  return {
    query: ShowQuerySelector(state),
    Images: ShowImagesSelectors(state),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ShowData);
