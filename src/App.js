import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { removeItem, addItem } from "./actions";
import { strictEqual } from "assert";

const App = props => {
  console.log(`App.js: props: `, props);
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log(`App.js: buyItem: item: `, item);
    props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
          car={props.car}
          removeFeature={removeFeature}
          // additionalFeatures={props.additionalFeatures}
          // additionalPrice={props.additionalPrice}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          buyItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
    // features: state.car.features
  };
};

export default connect(mapStateToProps, { removeItem, addItem })(App);
