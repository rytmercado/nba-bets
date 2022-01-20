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


  componentDidMount(){
    if (this.props.user){
      if (this.props.user.id){
        this.setState({userId: this.props.user.id, handle: this.props.user.handle})
      }
    }
    if (this.props.game){
          if (this.props.game._id){
            this.setState({gameId: this.props.game._id})
          } 
        }
  }

  handleChange(field) {
    return e => {
        this.setState({ [field]: e.currentTarget.value })
    }
  }
  
  handleSubmit() {
      this.props.postComment(this.state)
  }

  // renderComments() {
  //   let comments = this.props.comments
  //   if (comments) {
  //       return(
  //           <ul>
  //             { (comments).map((comment, i) => (
  //               <li className="comment" key={i}>
  //                 <b><i>{comment.body} </i></b>- {comment.handle}
  //               </li>
  //             ))}
  //           </ul>
  //         );
  //       } else {
  //           return null
  //       }
  // }

  render() {
    let comments = [];
    if (!!this.props.game.comments){
      comments = this.props.game.comments.map(commentObject => <div className="comment">
        <div className="comment-object">
          <div className="comment-handle">
            {commentObject.handle}
          </div>
          <div className="comment-body">
            {commentObject.body}
          </div>
          <div className="comment-timestamps">
            {commentObject.updatedAt}
          </div>
        </div>
      </div> )
    }
    
    
            return(
                <div className="comments-container">
                    <div className="current-comments">
                        {/* <h3 className="count">{count} comments</h3> */}
                        {comments}
                        
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="comment-form">
                        <div className="comment-row">
                            <div className="input-div"> 
                            <span className="input-name"></span>
                            <textarea
                                rows="2"
                                value={this.props.body}
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