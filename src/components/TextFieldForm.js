import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const TextFieldForm = props => {
  return (
    <div>
      <Box>
        <form>
          <div>
            <TextField
              fullWidth
              id="profile-name"
              name="name"
              label="Name *"
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              fullWidth
              id="profile-name"
              name="name"
              label="Role"
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              fullWidth
              id="profile-name"
              name="email"
              label="Email *"
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              id="profile-name"
              name="pwd"
              label="Password *"
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </form>
      </Box>
    </div>
  )
}

export default TextFieldForm
