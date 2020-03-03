import React from 'react';

// const Total = props => {
//   return (
//     <div className="content">
//       <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
//     </div>
//   );
// };

// export default Total;

import { connect } from 'react-redux';
import { reducer } from '../reducers';

const Total = ({ car, additionPrice }) => {
  return (
    <div className='content'>
      <h4>Total Amount:
         {car.price + additionPrice}
      </h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car, 
    additionPrice: state.additionPrice
  }
};

export default connect(mapStateToProps, { reducer })(Total);