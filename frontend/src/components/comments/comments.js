import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props)
        
        this.state= {
                userId: "",
                handle: "",
                gameId: "",
                body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.renderComments = this.renderComments.bind(this);
    }

//   componentDidMount() {
//       this.props.getComments(this.props.g.id)
//   }

  handleChange(field) {
    return e => {
        this.setState({ [field]: e.currentTarget.value })
    }
  }
  
  handleSubmit() {
        const comments = Object.values(this.props.comments)
        console.log(comments)
        this.setState({ userId: this.props.user.id, gameId: this.props.g._id, handle: this.props.user.handle }, () => {
            this.props.postComment(this.state)
        })
  }

  renderComments() {
    let comments = this.props.comments
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
        if (this.props.comments) {
            let count = this.props.comments.length
            return(
                <div className="comments-container">
                    <div className="current-comments">
                        <h3 className="count">{count} comments</h3>
                        {this.renderComments()} 
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="comment-form">
                        <div className="comment-row">
                            <div className="input-div"> 
                            <span className="input-name"></span>
                            <textarea
                                rows="2"
                                className="body"
                                type='text'
                                placeholder='Type your reply here.'
                                component='input'
                                
                                onChange={this.handleChange("body")}></textarea>  
                            </div>
                        </div> 
                        </div>
                        <div className="comment-btn-div">
                            <button className="comment-post-btn" type="submit">
                                Post
                            </button>
                        </div>
                    </form>
                </div>

            )} else {
            return (
                <div className="comments-container">
                <form>
                <div className="comment-form">
                <div className="comment-row">
                    <div className="input-div"> 
                    <span className="input-name"></span>
                    <textarea
                        rows="2"
                        className="input-box"
                        type='text'
                        placeholder='Type your reply here.'
                        component='input'
                        
                        onChange={this.handleChange}></textarea>  
                    </div>
                </div> 
                </div>
            </form>
            <div className="comment-btn-div">
                <button className="comment-post-btn" onClick={this.handleSubmit} type="submit">
                    Post
                </button>
            </div>

                </div>
            )}
        } 
}

export default Comment;