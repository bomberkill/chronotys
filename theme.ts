import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  // primaryColor: '#1D70BE',
  colors: {
    orange: [
      '#F29200',
      '#D54006',
      '#F2C230',
      '#F2D240',
      '#F2E250',
      '#F2F260',
      '#E1F200',
      '#D0F200',
      '#BFF200',
      '#AEF200',
    ],
    blue: [
      '#1D70BE',
      '#052137',
      '#1D70DC',
      '#1D70E6',
      '#1D70F0',
      '#1D70FA',
      '#1D64F2',
      '#1D58F2',
      '#e0e0e0',
      '#ffffff',
    ],
    white: [
      '#ffffff',
      '#fbfbfb',
      '#eeeeee',
      '#e0e0e0',
      '#d6d6d6',
      '#fafafa',
      '#f5f5f5',
      '#f0f0f0',
      '#ebebeb',
      '#eaeaea',
    ],
    // white: [
    //   '#ffffff',
    //   '#fbfbfb',
    //   '#eeeeee',
    //   '#e0e0e0',
    //   '#d6d6d6',
    //   '#fafafa',
    //   '#f5f5f5',
    //   '#f0f0f0',
    //   '#ebebeb',
    //   '#eaeaea',
    // ],
  },
  // #1D70BE bleu
  // #F29200 jaune
  // #052137 bleu foncé
  // #D54006 orange
  fontSizes: {
    xs: rem(10),
    sm: rem(14),
    md: rem(18),
    lg: rem(36),
    xl: rem(48),
  },

  lineHeights: {
    xs: '1',
    sm: '1.25',
    md: '1.45',
    lg: '1.5',
    xl: '1.75',
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  spacing: {
    xs: rem(4),
    xl: rem(48),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
  },
  fontFamily: 'Sawarabi Gothic, sans-serif',

  headings: {
    fontFamily: 'Sawarabi Gothic, sans-serif',
    fontWeight: '400',
    sizes: {
      h1: {
        fontWeight: '700',
        fontSize: rem(50),
        lineHeight: '1.4',
      },
      h2: {
        fontSize: rem(30),
      },
      h3: {
        fontSize: rem(24),
      },
      h4: {
        fontSize: rem(18),
      },
      h5: {
        fontSize: rem(16),
      },
      h6: {
        fontSize: rem(14),
      },
    },
  },
});

// xs: 36em, soit environ 576px
// sm: 48em, soit environ 768px
// md: 62em, soit environ 992px
// lg: 75em, soit environ 1200px
// xl: 88em, soit environ 1408px
