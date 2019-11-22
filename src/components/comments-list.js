import React from 'react';
import axios from 'axios';
import CommentCard from './comment-card';
import '../App.css'

class CommentList extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        inputValue: ""
    }

    componentDidMount(){
        axios
          .get(`http://bowie-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`)
          .then(({ data }) => {
            this.setState({comments: data.comments, isLoading: false})
          });
    }

    
    handleSubmit = event => {
      event.preventDefault()
      const {value} = event.target.Comment
      const {user} = this.props

      const commentInfo = { body: value, username: user }

      axios.post(`http://bowie-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`, commentInfo).then(({data : { comment }}) => {
        const newComments = this.state.comments.unshift(comment)
        this.setState({inputValue: ""})
      })
    }
    render() {

      const handleChange = event => {
        this.setState({inputValue: event.target.value})
    }


      const removeDeletedComment= (comment_id) => {
        let sansDeleted = this.state.comments.filter(comment => {
          return comment.comment_id !== comment_id
        })
        this.setState({comments: sansDeleted})
      }

const {user, commentsShown} = this.props
const {isLoading, comments, inputValue} = this.state
let arrayIndex = 0
         return <>
         {isLoading ? <p>Loading comments...</p> :
        <ul className="CommentList">
        {user !== "" && commentsShown === true && <form onSubmit={this.handleSubmit}>
               
               <textarea required name="Comment" className= "LeaveComment" value={this.state.inputValue} onChange={handleChange} placeholder="Write a comment here">
               </textarea>
               <button className="LeaveCommentButton">Leave Comment</button>
               
               </form>}
               {user === "" && commentsShown === true && <form>
               <p className="PleaseLogIn">Please log in to comment and vote</p><p></p>
               </form>}
            {comments.map(comment => {
              arrayIndex ++
            return <CommentCard key={`${comment.comment_id}`} comment={comment} position={arrayIndex} user={user} article={this.props.id} removeDeletedComment={removeDeletedComment}/>;
          })}
        </ul>}</>
    }
}

export default CommentList;