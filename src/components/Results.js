import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useStyles } from './useStyles'

const Results = props => {
  const classes = useStyles()
  return (
    <div>
      <Box>
        <Typography className={classes.messageComplete}>Success!</Typography>
        <Box>
          <CheckCircleIcon className={classes.iconSuccess} />
        </Box>
        <Typography className={classes.messageComplete}>
          Please verify your email address, you should have recieved an email
          from us already!
        </Typography>
      </Box>
      <Box className={classes.formOutput}>
        <pre>
          {`JSON Data Form-Completed: {
          "FormStage": 3,
          "FormUserSignup": {
            "name": "Khanh Huynh",
            "role": "aaaaaa",
            "email": "huynhngockhanh0568@gmail.com",
            "password": "2323232132323123sadsa1A"
          },
          "FormUserPrivacy": {
            "signup1": true,
            "signup2": false
          }
        }`}
        </pre>
      </Box>
    </div>
  )
}

export default Results
