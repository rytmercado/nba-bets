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
            <div className="game-item">
                
            </div>
        })
        
    }

    render() {
        return (
            <div class="game-index-item-grid">
                {this.renderGames()}
            </div>
        )
    }
}