import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
          comment: {
            userId: "",
            handle: "",
            gameId: "",
            body: "",
            parentComment: null, 
          },
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


  componentDidMount(){
    if (this.props.user){
      if (this.props.user.id){
        if (this.props.g){
          if (this.props.g._id){
            this.setState({comment: {...this.state.comment, userId: this.props.user.id, handle: this.props.user.handle,  gameId: this.props.g._id}})
          }
        }
      }
    }
  }

  updateComment(){
    
  }

  handleChange(field) {
    return e => {
        this.setState({comment: {...this.state.comment, [field]: e.currentTarget.value}})
    }
  }
  
  handleSubmit() {

      this.props.postComment(this.state.comment)

      this.setState(state => {
        return {
          comment: {
            userId: state.comment.userId,
            handle: state.comment.handle,
            gameId: state.comment.gameId,
            body: "",
            parentComment: null 
          },
        };

      })
  }

  renderComments(commentsArray){
    let comments = commentsArray; 
    comments = commentsArray.map(commentObject => {
      let updatedAt;
      if (!!commentObject.updatedAt){
        updatedAt = commentObject.updatedAt;
      } else {
        updatedAt = "Just Now"
      }
      return (
        <div className="comment">
          <div className="comment-object">
            <div className="comment-handle">
              {commentObject.handle}
            </div>
            <div className="comment-body">
              {commentObject.body}
            </div>
            <div className="comment-timestamps">
              {updatedAt}
            </div>
          </div>
        </div>
      )
    })

      return comments; 
  }

  render() {
    let comments;
    if (!!this.props.g){
      if (!!this.props.g.comments){
        comments = this.renderComments(this.props.g.comments)
      }
    }
    
    
            return(
                <div className="comments-container">
                    <div className="current-comments">
                        {comments}
                        
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="comment-form">
                        <div className="comment-row">
                            <div className="input-div"> 
                            <span className="input-name"></span>
                            <textarea
                                rows="2"
                                value={this.state.comment.body}
                                type='text'
                                placeholder='Start talking some smack!'
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

            )
      } 
}

export default Comment;