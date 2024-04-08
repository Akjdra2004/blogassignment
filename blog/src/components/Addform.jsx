import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addform= () => {
    
  return (
    <div style={{ paddingTop:"80px"}}>
        <Typography variant='h4' color={"dimgray"}>
            BLOG FORM
        </Typography>
        <br/>
        <TextField label='Blog Name' variant='outlined' /><br/><br/>
        <TextField label='Description' variant='outlined'  /><br/><br/>
        <TextField label='Author Name' variant='outlined' /><br/><br/>
        
        <Button variant='contained'color='secondary' >submit</Button>
    </div>
  )
}

export default Addform