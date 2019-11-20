import React from 'react';

class ArticlesHeader extends React.Component {
    render (){
        console.log("TITLE",this.props.title)
        const searchTerm = this.props.title
    return <>{searchTerm === undefined ? <p className="ArticlesHeader">Front Page</p> : <p className="ArticlesHeader">{searchTerm}</p>}</>
    }
}

export default ArticlesHeader;