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
    let comments = this.state.game.comments;
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
        <div className="post-comment">
            <form>
                <input value={body} onChange={this.handleChange}
                />
                <button
                    onClick={this.handleSubmit}
                    type='button'
                >
                    Post
                </button>
            </form>
        </div>  
    </div>
   )
}}

export default Comment;