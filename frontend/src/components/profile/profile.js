import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import BetIndexContainer from '../profile_bets/bet_index_container';

class Profile extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        if(this.props.currentUser.id){
            this.props.getBets(this.props.currentUser.id)
            this.props.fetchUser(this.props.currentUser.id)
        } else {
            this.props.getBets(this.props.currentUser._id)
            this.props.fetchUser(this.props.currentUser._id)
        }
    }

    render() {
        console.log(this.state)
        if(!this.props.currentUser){
            console.log(this.props)
            return null
        }
        return(
            <div className="profile-container">
                <NavBarContainer />
                <div className="profile-body-container">
                    <div className="profile-body-header">My Bets</div>
                    <div className="profile-body">
                        <BetIndexContainer bets={this.props.bets}/>
                    </div>


                </div>
            </div>
        )
    }
}

export default Profile;