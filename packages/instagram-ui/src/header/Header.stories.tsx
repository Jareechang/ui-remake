import React from 'react';

import { Header } from './Header';

export default {
  title: 'Custom/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = {};

export const WithText = Template.bind({});
WithText.args = {
  text: 'with text'
};
