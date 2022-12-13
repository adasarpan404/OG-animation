import { storiesOf } from "@storybook/react";
import Hamburger from "../components/HamBurger";

const stories = storiesOf("Hamburger", module);

stories.add("Hamburger-Animation", () => {
  return (
    <div>
      <Hamburger.ComeToMiddle />
      <br />
      <br />
      <Hamburger.Irregular />
      <br />
      <br />
      <Hamburger.ConvertArrow />
      <br />
      <br />
      <Hamburger.ConvertCross />
    </div>
  );
});
