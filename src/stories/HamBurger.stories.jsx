import { storiesOf } from "@storybook/react";
import HamBurger from "../components/HamBurger";

const stories = storiesOf('HamBurger', module);

stories.add('App', () => {

    return (
        <HamBurger.Irregular />
    )

})