import { storiesOf } from "@storybook/react";
import HamBurger from "../components/HamBurger";

const stories = storiesOf("HamBurger", module);

stories.add("HamBurger-Animation", () => {
  return (
    <div>
      <HamBurger.ComeToMiddle />
      <br />
      <br />
      <HamBurger.Irregular />
      <br />
      <br />
      <HamBurger.ConvertArrow />
      <br />
      <br />
      <HamBurger.ConvertCross />
    </div>
  );
});
