import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#bfbfbf',
      main: '#242424',
      dark: '#101010',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff6161',
      main: '#b81b1b',
      dark: '#ff4444',
      contrastText: '#ffffff',
    },
      openTitle: '#346e8a',
      protectedTitle: '#b81b1b',
      type: 'light'
    }
  })

  export default theme