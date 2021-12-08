import React from 'react'

export default class GameIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.renderGames = this.renderGames.bind(this);
    }

    renderGames () {
        const today = Date.getFullYear() + "-" + Date.getMonth() + "-" + Date.getDay();
        const games = this.props.fetchAllGames().filter((game) => { return game.start_time === `${today}%` } );
        games.map(game => {
            return (
                <div className="game-item" key={game._id}>
                    <div className="team">{game.away_team}</div>
                    <div className="odds">{game.away_odds}</div>
                    <div className="team">{game.home_team}</div>
                    <div className="odds">{game.home_odds}</div>
                </div>
        )});
    }

    render() {
        return (
            <div class="game-index-item-grid">
                {this.renderGames()}
            </div>
        )
    }
}