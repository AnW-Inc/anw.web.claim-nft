import colors from './foundations/colors'

export const globalStyles = {
  colors: {
    black: {
      800: 'rgba(255, 255, 255, 0.8)',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        // bg: colors.theme['color-3'],
        bg: 'linear-gradient(166.15deg, rgb(0, 57, 63) -37.37%, rgb(24, 26, 28) 66.42%)',
        fontFamily: 'Outfit, sans-serif',
        color: colors.theme['color-6'],
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        overflowX: 'hidden',
      },
      html: {
        fontFamily: 'Poppins, sans-serif',
      },
    }),
  },
}
