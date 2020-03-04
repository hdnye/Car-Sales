import React from 'react';
import { connect } from 'react-redux';
//import { addFeature } from '../actions/userEvents';


//use dispatch & bring in action
//connect to store

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => ({
//   features: state.features,
//   price: state.price
// });

// export default connect(mapStateToProps, { addFeature })(AdditionalFeature);

export default AdditionalFeature;