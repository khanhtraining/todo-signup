import React from 'react'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const PrivacyForm = props => {
  return (
    <div>
      <Box>Privacy Form</Box>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Recieve updates about Tray.io product by email"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Recieve communication by email for other products created by the Tray.io team"
        />
      </FormGroup>
    </div>
  )
}

PrivacyForm.propTypes = {}

export default PrivacyForm
