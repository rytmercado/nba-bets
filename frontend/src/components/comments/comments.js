import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props)
        
        this.state= {
                userId: "",
                handle: "",
                gameId: "",
                body: "",
                parentComment: null, 
        }
        console.log(this.props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


  handleChange(field) {
    return e => {
        this.setState({ [field]: e.currentTarget.value })
    }
  }
  
  handleSubmit() {
        this.setState({ userId: this.props.user.id, gameId: this.props.game._id, handle: this.props.user.handle }, () => {
            this.props.postComment(this.state)
        })
  }

  renderComments() {
    let comments = this.props.game.comments
    if (comments) {
        return(
            <ul>
              { (comments).map((comment, i) => (
                <li className="comment" key={i}>
                  <b><i>{comment.body} </i></b>- {comment.handle}
                </li>
              ))}
            </ul>
          );
        } else {
            return <ul className="comments-list">
                        <li>
                            <p className="no-comments">No comments on this game yet!</p>
                        </li>
                    </ul>
        }
  }

  render() {
        if (this.props.game.comments) {
            let count = this.props.game.comments.length
            return(
                <div className="comments-container">
                    <div className="comments-box">
                        {this.renderComments()} 
                    </div>
                    <div className="comment-form">
                        <div className="comment-row">
                            <div className="input-div"> 
                                <textarea
                                    rows="2"
                                    value="Start talking some smack!"
                                    type='text'
                                    placeholder='Start talking some smack!'
                                    component='input'
                                    
                                    onChange={() => this.handleChange("body")}></textarea>  
                            </div> 
                        </div>
                        <div className="comment-btn-div">
                            <button className="comment-post-btn" onClick={() => this.handleSubmit()}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>

            )
      } 
}
}

export default Comment;