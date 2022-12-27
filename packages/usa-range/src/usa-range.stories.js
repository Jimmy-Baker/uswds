import Component from "./usa-range.twig";

export default {
  title: "Components/Form Inputs/Range",
  argTypes: {
    disabled_state: {
      name: "Disabled state",
      control: { type: "radio" },
      options: ["none", "disabled", "aria_disabled"],
    },
  }
};

const Template = (args) => Component(args);

export const Range = Template.bind({});
