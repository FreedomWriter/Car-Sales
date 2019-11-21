import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  console.log(`AddedFeatures.js: props.car.features: `, props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            // console.log(`from map`, item)
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeature={props.removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// const mapPropsToState = state => {
//   return {
//     ...state,
//     car: {
//       ...state.car,
//       features: [...state.car.features, state.car.features]
//     }
//   };
// };
// //did this now I'm not getting updated features
// export default connect(mapPropsToState)(AddedFeatures);

export default AddedFeatures;
