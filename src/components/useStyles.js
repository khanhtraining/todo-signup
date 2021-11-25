import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  messageComplete: {
    color: 'green',
    fontWeight: 'bold',
  },
  iconSuccess: {
    fill: 'green !important',
    transform: ' scale(3)',
    height: '5em !important',
  },
  titleForm: {
    fontSize: '2rem',
    fontWeight: 'bold',
    paddingBottom: '1em',
  },
  formOutput: {
    height: 'auto',
    width: 'auto',
    textAlign: 'start',
    backgroundColor: '#80808026',
    margin: '1em',
    padding: '0.6em',
  },
}))
