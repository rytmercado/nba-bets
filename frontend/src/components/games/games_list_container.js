import { connect } from 'react-redux';
import { getGames } from '../../actions/game_actions';
import GameList from './games_list_item'


const mSTP = state => ({
    games: state.games,
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
  });

export default connect(mSTP, mDTP)(GameList);