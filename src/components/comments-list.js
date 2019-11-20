import React from 'react';
import axios from 'axios';
import CommentCard from './comment-card';
import '../App.css'

class CommentList extends React.Component {
    state = {
        comments: [],
        isLoading: true
    }

    componentDidMount(){
        axios
          .get(`http://bowie-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`)
          .then(({ data }) => {
              console.log(data)
            this.setState({comments: data.comments, isLoading: false})
          });
    }

    
    render() {

      const removeDeletedComment= (comment_id) => {
        console.log("REMOVING")
        let sansDeleted = this.state.comments.filter(comment => {
          return comment.comment_id !== comment_id
        })
        this.setState({comments: sansDeleted})
      }

const {user} = this.props
const {isLoading, comments} = this.state
let arrayIndex = 0
        console.log("COMMENTS",comments)
         return <>
         {isLoading ? <p>Loading comments...</p> :
        <ul className="CommentList">
            {comments.map(comment => {
                console.log(comment)
              arrayIndex ++
            return <CommentCard key={`${comment.comment_id}`} comment={comment} position={arrayIndex} user={user} article={this.props.id} removeDeletedComment={removeDeletedComment}/>;
          })}
        </ul>}</>
    }
}

export default CommentList;