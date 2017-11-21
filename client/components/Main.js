import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        //The child will be either photogrid or single grid...
        // Populated by react router
        // this.props will take any props from the parent components to the children components...
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  },
});

export default Main;
