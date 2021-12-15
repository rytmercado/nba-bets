import React from 'react';
import { connect } from 'react-redux';
import BetIndex from './bet_index';
import { deleteBet } from '../../actions/bet_actions'


const mSTP = (state, ownProps) => ({
    bets: state.bets
})

const mDTP = dispatch => ({
    // deleteBet: (betId) => dispatch(deleteBet(betId))
})

export default connect(mSTP, mDTP)(BetIndex)