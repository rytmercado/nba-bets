import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';

const mSTP = (state) => ({
    user: state
})

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(Profile)