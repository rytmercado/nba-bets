import React from 'react'


class Comment extends React.Component {
    constructor(props) {
        super(props)
        
        state={
            userId: this.props.currentUser,
            gameId: this.props.params.match.game_id,
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  componentDidMount() {
      console.log(this.props)
      this.getComments(this.props.params.match.gameId)
  }

  handleChange() {
    return e => {
        this.setState({ body: e.currentTarget.value })
    }
  }
  
  handleSubmit() {
      this.props.postComment(this.state)
  }

  render() {
    let comments = this.props.game.comments;
    let count = comments.length;

   return(
    <div className="comments-container">
        <div className="current-comments">
            <h3>{count} Comments</h3>
            <ul>
                { comments.map(comment => {
                    return <li>{comment}</li>
                }) }
            </ul>
        </div>
        <form>
            <div className="comment-form">
            <div className="comment-row"> <img src={user} style={{width:80, height:80}}/>
            <div className="comment-row">
                <div className="input-div"> 
                <span className="input-name">{this.props.currentUser.username}</span>
                <textarea
                    rows="2"
                    className="input-box"
                    type='text'
                    placeholder='Type your reply here.'
                    component='input'
                    value={text}
                    onChange={handleChange}></textarea>  
            </div>
            </div> 
            </div>
        <div className="comment-btn-div">
            <button className="comment-post-btn" onClick={this.handleSubmit} type="submit">
                Post
            </button>
        </div>
        </div>
      </form>
    </div>
   )
}}

export default Comment;