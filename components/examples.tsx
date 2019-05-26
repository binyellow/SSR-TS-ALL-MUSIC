import React, { Fragment } from "react";
import { connect } from "react-redux";
// import Clock from './clock'
// import Counter from './counter'

interface paramsProps {
  lastUpdate: string;
  light: string;
  musics: object[];
}

// interface musicItemProps {
//   id: string,
//   url: string,
//   title: string,
// }

function Examples({ lastUpdate, light, musics }: paramsProps) {
  return (
    <Fragment>
      {
        musics.map((item: { _id: string, title: string, url: string }) => (
          <div key={item._id}>
            <p>{`歌曲: ${item.title}`}</p>
            <audio controls src={item.url} />
          </div>
        ))
      }
    </Fragment>
  );
}

function mapStateToProps({ exampleReducer, musicReducer }: { exampleReducer: paramsProps, musicReducer: paramsProps }) {
  const { lastUpdate, light } = exampleReducer;
  const { musics = [] } = musicReducer;
  return { lastUpdate, light, musics };
}

export default connect(mapStateToProps)(Examples);
