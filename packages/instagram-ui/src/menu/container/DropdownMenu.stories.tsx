import React from 'react';

import { DropdownMenu } from './DropdownMenu';

export default {
  title: 'Custom/DropdownMenu',
  component: DropdownMenu,
};

const Template = (args) => <DropdownMenu {...args} />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {};

export const MenuWithOneItem = Template.bind({});
MenuWithOneItem.args = {
  items: [
    {
      text: 'Profile',
      iconType: 'profile'
    }
  ]
};

export const MenuWithMultipleItem = Template.bind({});
MenuWithMultipleItem.args = {
  items: [
    {
      text: 'Profile',
      iconType: 'profile'
    },
    {
      text: 'Saved',
      iconType: 'saved'
    },
    {
      text: 'Settings',
      iconType: 'settings'
    },
    {
      text: 'Switch Accounts',
      iconType: 'switch-accounts'
    },
  ]
};
