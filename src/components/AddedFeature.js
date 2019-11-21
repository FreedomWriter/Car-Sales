import React from "react";
import { connect } from "react-redux";

const AddedFeature = props => {
  console.log(`AddedFeature.js: props: `, props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// const mapPropsToState = state => {
//   return {
//     car: {
//       features: [...state.car.features, state.features]
//     }
//   };
// };

// export default connect(mapPropsToState)(AddedFeature);
export default AddedFeature;
