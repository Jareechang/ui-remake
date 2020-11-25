import React from 'react';

import { DropdownMenu } from './DropdownMenu';

export default {
  title: 'Custom/DropdownMenu',
  component: DropdownMenu,
};

const Template = (args) => <DropdownMenu {...args} />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {};
