import React from 'react'
import { connect } from 'react-redux'
import { startClock, addMusic } from '../store'
import Examples from '../components/examples'
import { queryList } from '../service/music';
import { getOrCreateStore } from '../lib/with-redux-store';

interface IndexProps {
  startClock: () => any;
};

class Index extends React.Component<IndexProps> {
  constructor(props: IndexProps) {
    super(props);
    this.fetchList = this.fetchList.bind(this);
  }

  // static getInitialProps ({ reduxStore, req }: { reduxStore: { dispatch: object }, req: object }) {
  //   // const isServer: boolean = !!req
  //   // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  //   // reduxStore.dispatch(serverRenderClock(isServer))

  //   return {}
  // }

  timer: number = 0;

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    // this.timer = setInterval(() => this.props.startClock(), 1000)
    const store = getOrCreateStore();
    console.log(store);
    store.dispatch(this.fetchList())
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  fetchList() {
    return (dispatch: object) => {
      return queryList().then((res: { data: object, status: number })=> {
        if(res.status === 200) {
          dispatch(addMusic(res.data));
        }
      })
    }
  }

  render () {
    return <Examples />
  }
}
const mapDispatchToProps = { startClock }
export default connect(
  null,
  mapDispatchToProps
)(Index)
