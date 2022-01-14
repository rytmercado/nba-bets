import React from 'react'
import Graph from './graph'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';

const mSTP = state => ({
  currentUser: state.session.user
})

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

const GraphContainer = connect(mSTP, mDTP)(Graph);
export default GraphContainer;