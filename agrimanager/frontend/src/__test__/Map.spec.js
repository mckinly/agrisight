import React from "react";
import renderer from "react-test-renderer";
import MapContainer from "../components/agrisight/Map";

test("Map renders", () => {
  const component = renderer.create(<MapContainer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
