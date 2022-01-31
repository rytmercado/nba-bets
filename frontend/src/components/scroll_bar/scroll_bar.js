import React from 'react';
import { Link } from 'react-router-dom'



class ScrollBar extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount () {
        this.props.fetchAllGames()                  
    }

    render(){
        const games = this.props.games
        const sortedGames = games.sort(function(a, b) {
            let keyA = new Date(a.start_time)
            let keyB = new Date(b.start_time);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
            });
        // console.log(sortedGames)

        return (
            <div className="scroll-wrapper">
                {/* { games.map(game => <ScrollBarItem game={game} key={game._id} />)} */}
                <div className="scroll-item">box-1</div>
                <div className="scroll-item">box-2</div>
                <div className="scroll-item">box-3</div>
                <div className="scroll-item">box-4</div>
                <div className="scroll-item">box-5</div>
                <div className="scroll-item">box-6</div>
            </div>
        )
    }
}

export default ScrollBar;