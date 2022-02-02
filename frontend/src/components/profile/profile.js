import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import BetIndexContainer from '../profile_bets/bet_index_container';
import GraphContainer from '../profile_graph/graph_container';

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
        if(!this.props.currentUser){
            return null
        }
        return(
            <div className="profile-container">
              
                <NavBarContainer />
                <BetIndexContainer bets={this.props.bets} user={this.props.currentUser}/>

            </div>
        )
    }
}

export default Profile;