import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';
import { reducer } from '../reducers';

const AddedFeatures = ({ car }) => {
    
 return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} features={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  car: state.car
})

export default connect(mapStateToProps, { reducer })(AddedFeatures);
