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
        {React.cloneElement(this.props.children)}
      </div>
    );
  },
});

export default Main;