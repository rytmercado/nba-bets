import React from 'react';
import { connect } from 'react-redux';
import BetIndex from './bet_index';


const mSTP = (state, ownProps) => ({
    bets: state.bets
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(BetIndex)