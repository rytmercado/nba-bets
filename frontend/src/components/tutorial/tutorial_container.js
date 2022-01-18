import {connect} from 'react-redux'
import Tutorial from './tutorial'

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

const TutorialContainer = connect(mapStateToProps, null)(Tutorial); 

export default TutorialContainer;