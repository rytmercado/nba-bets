import React from 'react'
import './edit_comment_modal.css'

class EditCommentModal extends React.Component {
  constructor(props){
    super(props)

    //body, commentId, gameId, handle, user
    this.state = {
      comment: {
        userId: "",
        commentId: "",
        gameId: "",
        handle: "",
        body: ""
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({comment: {
      ...this.state.comment, 
      userId: this.props.comment.user,
      commentId: this.props.comment._id,
      gameId: this.props.gameId,
      handle: this.props.comment.handle,
    }}, () => {
      this.props.updateComment(this.state.comment)
      this.props.onClose();
    })

  }

  handleChange(field) {
    return e => {
        this.setState({comment: {...this.state.comment, [field]: e.currentTarget.value}})
    }
  }

  componentDidMount(){
    if (this.props.comment._id){
      this.setState({comment: {
        userId: this.props.comment.user,
        commentId: this.props.comment._id,
        body: this.props.comment.body,
        handle: this.props.comment.handle, 
      }})
    }
  }

  render(){
    if (this.props.userId === this.props.comment.user && this.props.comment._id === this.props.commentId){
      if (this.props.modalOpen){
        return (
          <div>
              <div className="comment-modal">
                <h3 className="comment-modal-title"> Edit </h3>
            <textarea className="comment-text-area" cols="30" rows="10"
            onChange={this.handleChange("body")}
            >{this.props.comment.body}</textarea>
            <div className="comment-button-container">
              <button onClick={this.handleSubmit} className="comment-button">Save Changes</button>
            </div>
            </div>
            <div className="modal-screen"></div>
          </div>

        )
      }
    } 
    return (<div></div>)
  }
}

export default EditCommentModal; 