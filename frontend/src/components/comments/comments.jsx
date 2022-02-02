import React from 'react';
import EditCommentModal from './edit_comment_modal';
import { useParams } from "react-router-dom";

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
          editModalOpen: false,
          editCommentId: "",
          commentColor: ["white", "#53d337"]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteComment = this.deleteComment.bind(this)
        this.editComment = this.editComment.bind(this);
        this.createComment = this.createComment.bind(this);

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

  editComment(e){
    let body = e.currentTarget.innerHTML; 
    this.setState({editCommentForm: true})
    
  }



  deleteComment(e){

    let commentData = {
      gameId: this.props.g._id,
      userId: this.props.user._id,
      commentId: e.currentTarget.name, 
    }

    this.props.deleteComment(commentData)
  }

  handleChange(field) {
    return e => {
        this.setState({comment: {...this.state.comment, [field]: e.currentTarget.value}})
    }
  }

  createComment(comment){
    let url = new URL(window.location)
    let gameId = url.hash.slice(12);

    comment.gameId = gameId;

    if (typeof comment.userId.length !== "undefined" && comment.userId.length > 2){
        if (typeof comment.handle.length !== "undefined" && comment.handle.length > 2){
          this.props.postComment(comment)
          return true 
        }
        else{
          comment.handle = this.props.user.handle
          return this.createComment(comment);
        }
      } 
      else {
      comment.userId = this.props.user._id
      return this.createComment(comment);
    }
  }

  
  handleSubmit(e) {
    e.preventDefault()
    if (this.createComment(this.state.comment)){
      this.setState({
        comment:{
          ...this.state.comment,
          body: "",
        }
      })
    }

    
    
    // if(typeof this.state.comment.userId === "undefined"){
    //   console.log("post 1")
    //   this.props.postComment({
    //     userId: this.props.user._id,
    //     handle: this.props.user.handle,
    //     body: this.state.comment.body,
    //     gameId: this.props.g._id,
    //     parentComment: null 
    //   })
    // } else {
    //   if (this.state.comment.userId.length > 1 && this.state.comment.gameId.length > 1 && this.state.comment.handle.length > 1){
    //     console.log("post 2")
    //     this.props.postComment(this.state.comment)
    //   } else {
    //     this.setState(state => {
    //       return {
    //         comment: {
    //           userId: this.props.user._id,
    //           handle: this.props.user.handle,
    //           gameId: this.props.g._id,
    //           body: state.comment.body,
    //           parentComment: null 
    //         },
    //       }
  
    //     }, () => {
    //       this.props.postComment(this.state.comment)})
    //   }
    // }
      
  }

  
  renderComments(commentsArray){
    let comments = commentsArray; 
    comments = commentsArray.map(commentObject => {

      let updatedAt;
      if (!!commentObject.updatedAt){
        //TODO: parse datetime 
        updatedAt = commentObject.updatedAt.slice(0,10);
      } else {
        updatedAt = "Just Now"
      }

      //conditionally render remove, edit buttons 
      let userButtons = <div className="comment-buttons">
                          <button className="comment-delete" onClick={this.deleteComment} name={commentObject._id}>❌</button>
                          <button className="comment-edit" onClick={(e) => this.setState({editModalOpen: true, editCommentId: commentObject._id })} name={commentObject._id}>✏️</button>
                        </div>
      if (this.props.user.id === commentObject.user || this.props.user._id === commentObject.user){
        return (
          <div className="comment">
            <div className="comment-bar">
                <div className="comment-body" onDoubleClick={(e) => this.setState({editModalOpen: true, editCommentId: commentObject._id })}>
                  {commentObject.body}
                </div>
                <EditCommentModal onClose={() => this.setState({editModalOpen: false})} comment={commentObject} commentId={this.state.editCommentId} modalOpen={this.state.editModalOpen} gameId={this.state.comment.gameId} userId={this.props.user._id} updateComment={this.props.updateComment}/> 
            </div>
            <div className="comment-buttons">
            <div className="comment-handles">
              <div className="comment-owner">
                <i className="i">{commentObject.handle}</i>
              </div>
              {userButtons}
              <div className="comment-timestamps">
                <i className="i">{updatedAt}</i>
              </div>
            </div>
            </div>
          </div>
        )
        } else {
          return (
            <div className="comment">
            <div className="comment-bar2">
                <div className="comment-body2" onDoubleClick={(e) => this.setState({editModalOpen: true, editCommentId: commentObject._id })}>
                  {commentObject.body}
                </div>
                <EditCommentModal onClose={() => this.setState({editModalOpen: false})} comment={commentObject} commentId={this.state.editCommentId} modalOpen={this.state.editModalOpen} gameId={this.state.comment.gameId} userId={this.props.user._id} updateComment={this.props.updateComment}/> 
            </div>
            <div className="comment-handles2">
              <div className="comment-owner">
                <i className="i">{commentObject.handle}</i>
              </div>
              <div className="comment-timestamps">
                <i className="i">{updatedAt}</i>
              </div>
            </div>
          </div>
          )}
  })
  return comments; 
}


  render() {
    let comments;
    if (!!this.props.g){
      if (!!this.props.g.comments){
        comments = this.renderComments(this.props.g.comments).reverse()
      }
    }
    
    //need to only render the delete and remove buttons
    //if its the user's own comments 
            return(
                <div className="comments-container">
                  <form className="comment-form" onSubmit={this.handleSubmit}>
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
                        <div className="comment-btn-div">
                            <button className="comment-post-btn" type="submit">
                                Post
                            </button>
                        </div>
                    </form>
                    <div className="current-comments">
                        {comments}
                        
                    </div>
                </div>

            )
      } 
}

export default Comment;