import React from "react";

const AddedFeature = props => {
  console.log(`AddedFeature.js: props: `, props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          props.removeFeature(props.feature);
          console.log(
            `AdditionalFeature.js: Onclick: feature: `,
            props.feature
          );
        }}
      >
        X
      </button>
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
