import React from 'react';

class ArticlesHeader extends React.Component {
    render (){
        const searchTerm = this.props.title
        return <p className="ArticlesHeader">{searchTerm}</p>
    }
}

export default ArticlesHeader;