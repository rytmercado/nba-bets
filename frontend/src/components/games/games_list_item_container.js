import { connect } from 'react-redux';
import { getGame } from '../../actions/game_actions';
import GamesListItem from './games_list_item'


const mSTP = (state, ownProps) => ({
    user: state.session.user,
    games: state.games,
    id: ownProps.id,
});

const mDTP = dispatch => ({
    
  });

export default connect(mSTP, null)(GamesListItem);