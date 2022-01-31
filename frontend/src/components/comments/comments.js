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
        const comments = Object.values(this.props.game.comments)
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
            return null
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
                    {/* <form onSubmit={this.handleSubmit}>
                        <div className="comment-form">
                        <div className="comment-row">
                            <div className="input-div"> 
                            <span className="input-name"></span>
                            <textarea
                                rows="2"
                                value="Start talking some smack!"
                                type='text'
                                placeholder='Start talking some smack!'
                                component='input'
                                
                                onChange={() => this.handleChange("body")}></textarea>  
                            </div>
                        </div> 
                        </div>
                        <div className="comment-btn-div">
                            <button className="comment-post-btn" type="submit">
                                Post
                            </button>
                        </div>
                    </form> */}
                </div>

            )
      } 
}
}

export default Comment;