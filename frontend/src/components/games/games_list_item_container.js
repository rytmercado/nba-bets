import { connect } from 'react-redux';
import { getGame } from '../../actions/game_actions';
import GamesListItem from './games_list_item'


const mSTP = (state, ownProps) => ({
    user: state.session.user,
    game: ownProps.game,
    id: ownProps.id,
});

const mDTP = dispatch => ({
    fetchGame: gameId => dispatch(getGame(gameId))
  });

export default connect(mSTP, mDTP)(GamesListItem);