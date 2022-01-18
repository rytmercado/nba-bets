import { connect } from 'react-redux';
import { getGames } from '../../actions/game_actions';
import GameList from './games_list_item'


const mSTP = (state, ownProps) => ({
    user: state.session.user,
    games: ownProps.games,
});

const mDTP = dispatch => ({

  });

export default connect(mSTP, null)(GameList);