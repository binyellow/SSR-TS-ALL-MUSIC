import { Fragment } from "react";
import { connect } from "react-redux";
// import Clock from './clock'
// import Counter from './counter'

interface paramsProps {
  lastUpdate: string;
  light: string;
  musics: object[];
}

interface musicItemProps {
  id: string,
  url: string,
}

function Examples({ lastUpdate, light, musics }: paramsProps) {
  return (
    <Fragment>
      音乐{lastUpdate}
      {light}
      {
        musics.map((item: musicItemProps)=>(
          <div>
            <p>{`歌曲: ${item.title}`}</p>
            <audio controls key={item.id} src={item.url} />
          </div>
        ))
      }
    </Fragment>
  );
}

function mapStateToProps(state: { exampleReducer: paramsProps }) {
  const { lastUpdate, light } = state.exampleReducer;
  const { musics = [] } = state.musicReducer;
  return { lastUpdate, light, musics };
}

export default connect(mapStateToProps)(Examples);
