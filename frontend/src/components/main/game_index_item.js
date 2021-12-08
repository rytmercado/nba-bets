import React from 'react'

export default class GameIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="game-index-item-grid">
                <div className="team">Brooklyn Nets</div>
                <div className="odds">-130</div>
                <div className="team">Dallas Mavericks</div>
                <div className="odds">+110</div>
            </div>
        )
    }
}