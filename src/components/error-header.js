import React from 'react';
import '../App.css';


class ErrorHeader extends React.Component {
    render () {

        const {error , description} = this.props

        return <div className="IndividualHeader">

  <p className="ArtCardTitle">Error {error}</p>
  <p className="ArtCardAuthorBlock">Description: {description}</p>

    </div>
    }
}

export default ErrorHeader;