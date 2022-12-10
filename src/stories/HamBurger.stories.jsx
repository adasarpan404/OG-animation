import { storiesOf } from "@storybook/react";
import Hamburger from "../components/Hamburger";

const stories = storiesOf("Hamburger", module);

stories.add("Animation", () => {
  return (
    <div>
      <Hamburger.ComeToMiddle />
      <br />
      <br />
      <Hamburger.Irregular />
      <br />
      <br />
      <Hamburger.ConvertArrow />
    </div>
  );
});
