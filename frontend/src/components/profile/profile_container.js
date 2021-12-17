import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { getBets } from '../../actions/bet_actions'
import { fetchUser } from '../../actions/session_actions'

const mSTP = (state) => ({
    currentUser: state.session.user,
    bets: state.bets
})

const mDTP = (dispatch) => ({
    getBets: (userId) => dispatch(getBets(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))

})

export default connect(mSTP, mDTP)(Profile)