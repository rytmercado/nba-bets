import React from 'react';
import { connect } from 'react-redux';
import BetIndex from './bet_index';
import { deleteBet, getBets } from '../../actions/bet_actions'


const mSTP = (state, ownProps) => ({
    currentUser: state.session.user
})

const mDTP = dispatch => ({
    // getBets: (userId) => dispatch(getBets(userId)),
    deleteBet: (betId) => dispatch(deleteBet(betId))
})

export default connect(mSTP, mDTP)(BetIndex)