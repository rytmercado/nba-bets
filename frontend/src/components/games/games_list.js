class GamesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allGames: undefined,
        }

    }

    componentDidMount () {
        this.props.fetchAllGames().then(res => 
            this.setState({allGames: res.data}))                  
    }

    render () {
        const games = this.state.allGames
        console.log(games)
        return (
            <div className="outer-grid">
            { games.map(game => <GamesListItem game={game} key={game._id} />)}
        </div>
    )

}
}
export default GamesList; 