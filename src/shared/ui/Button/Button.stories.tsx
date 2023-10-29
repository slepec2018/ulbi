import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonTheme, ButtonSize } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInverted.decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};
OutlineSizeL.decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator];

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};
OutlineSizeXL.decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};
BackgroundTheme.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInverted.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squere: true,
};
Square.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squere: true,
  size: ButtonSize.L,
};
SquareSizeL.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squere: true,
  size: ButtonSize.XL,
};
SquareSizeXL.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];