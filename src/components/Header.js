import React from 'react';

// const Header = props => {
//   return (
//     <>
//       <figure className="image is-128x128">
//         <img src={props.car.image} alt={props.car.name} />
//       </figure>
//       <h2>{props.car.name}</h2>
//       <p>Amount: ${props.car.price}</p>
//     </>
//   );
// };

// export default Header;


import { reducer } from '../reducers';
import { connect } from 'react-redux';

const Header = ({ car }) => {
  return (
    <div>
      <figure className="image is-128x128">
        {car.image}
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: {car.price}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  }
}

export default connect(mapStateToProps, { reducer })(Header);