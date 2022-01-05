import React from 'react';

class BetModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: this.props.game_id,
            userId: this.props.session.user._id,
            selection: '', 
            amount: 100,
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }


    handleInput(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
      }

    handleAmount(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    printOdds (odds) {
        if (odds > 0) {
            return `+ ${odds}`
        } else {
            return odds.toString()
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        console.log(this.state)
        this.props.postBet(this.state)
    }


    renderErrors() {
        return(
            <ul>
            {Object.values(this.props.errors).map((error, i) => (
                <li className="errors" key={i}>
                    {error}
                </li>
            ))}
            </ul>
        );
    }

    


    render () {
        if (this.props.modalOpen) {
            return (
                <div className="modal-open">
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                                <br/>
                                <label htmlFor="home-team">{this.props.h_team} {this.printOdds(this.props.h_odds)}</label>
                                <input id="home-team" onChange={this.handleInput("selection")} type="radio" value="true" name="label"/>
                                <br/>
                                <label htmlFor="away-team">{this.props.a_team} {this.printOdds(this.props.a_odds)}</label>
                                <input id="away-team" onChange={this.handleInput("selection")} type="radio" name="label"value="false"/>
                                <br/>
                                <label htmlFor="amount">Bet Amount:</label>
                                <input className="amount" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                                <br/>
                                <div className="errors">{this.renderErrors()}</div>
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button" type="submit">Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </form>
                </div>
        )} 
        else {
            return null;
        }
        }         
    } 

export default BetModal;