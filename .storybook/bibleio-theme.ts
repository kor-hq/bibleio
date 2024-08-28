import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Lora", "Lora Variable", serif',
  fontCode: 'serif',

  brandTitle: 'Bibleio Design',
  brandImage: '/storybook-brand-logo.png',
  brandTarget: '_blank',
  brandUrl: 'https://dev.bibleio.com/docs/design',

  //
  colorPrimary: '#00507C',
  colorSecondary: '#00507C',

  // UI
  appBg: '#CCCCCC',
  appContentBg: '#DDDDDD',
  appPreviewBg: '#D4D4D4',
  appBorderColor: '#000000',
  appBorderRadius: 12,

  // Text colors
  textColor: '#000000',
  textInverseColor: '#000000',

  // Toolbar default and active colors
  barTextColor: '#000000',
  barSelectedColor: '#00507C',
  barHoverColor: '#00507C',
  barBg: '#D4D4D4',

  // Form colors
  inputBg: '#DDDDDD',
  inputBorder: '#000000',
  inputTextColor: '#000000',
  inputBorderRadius: 8,
});
