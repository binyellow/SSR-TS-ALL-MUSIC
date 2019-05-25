import { Fragment } from 'react';
import { connect } from 'react-redux'
// import Clock from './clock'
// import Counter from './counter'

interface paramsProps {
  lastUpdate: object,
  light: object
}

function Examples ({ lastUpdate, light }: paramsProps) {
  return (
    <Fragment>
      音乐{lastUpdate}{light}
    </Fragment>
  )
}

function mapStateToProps (state: { exampleReducer: any }) {
  const { lastUpdate, light } = state.exampleReducer
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
