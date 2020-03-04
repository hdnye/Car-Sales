import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature } from '../actions/userEvents';

//use dispatch & bring in action

const AddedFeature = props => {
    
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.features}>X</button>
      {props.features.name}
    </li>
  );
};

const mapPropsToState = state => ({
  name: state.name,
  features: state.features
})


export default connect(mapPropsToState, { deleteFeature })(AddedFeature);
