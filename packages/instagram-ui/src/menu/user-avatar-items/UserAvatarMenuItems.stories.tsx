import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

import UserAvatarMenuItems from './UserAvatarMenuItems';

export default {
  title: 'Custom/UserAvatarMenuItems',
  component: UserAvatarMenuItems,
};

const Template = (args) => <UserAvatarMenuItems {...args} />;

export const DefaultMenuItem = Template.bind({});
DefaultMenuItem.args = {};

export const MenuItemWithProfileIcon = Template.bind({});
MenuItemWithProfileIcon.args = {
  text: 'Profle',
  iconType: 'profile'
};

export const MenuItemWithSavedIcon = Template.bind({});
MenuItemWithSavedIcon.args = {
  text: 'Saved',
  iconType: 'saved'
};

export const MenuItemWithSettingsIcon = Template.bind({});
MenuItemWithSettingsIcon.args = {
  text: 'Settings',
  iconType: 'settings'
};

export const MenuItemWithSwitchAccountsIcon = Template.bind({});
MenuItemWithSwitchAccountsIcon.args = {
  text: 'Switch Accounts',
  iconType: 'switch-accounts'
};

export const MenuItemWithCustomText = Template.bind({});
MenuItemWithCustomText.args = {
  text: 'My Menu Text',
  iconType: 'profile'
};
