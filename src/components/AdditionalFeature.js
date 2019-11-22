import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const AdditionalFeature = props => {
  console.log(`AdditionalFeature.js: props:`, props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.buyItem(props.feature);
          console.log(
            `AdditionalFeature.js: Onclick: feature: `,
            props.feature
          );
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
export default AdditionalFeature;
