// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Icons = () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5' color={'blue'}>
          Mes compétences
        </Typography>
        <Typography variant='body2'>Ceci liste des technologies ou languages avec lesquelles j'ai déjà travaillé</Typography>
      </Grid>
    </Grid>
  )
}

export default Icons
