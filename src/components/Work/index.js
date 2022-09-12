import React from "react";
import WorkList from "../WorkList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p class="my-5">{currentCategory.description}</p>
      <WorkList />
    </section>
  );
}
export default Gallery;
