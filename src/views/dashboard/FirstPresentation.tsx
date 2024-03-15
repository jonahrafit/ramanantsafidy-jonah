// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'
import { IconButton } from '@mui/material'
import { Facebook, Gmail, Github, Linkedin } from 'mdi-material-ui'

// Styled Grid component
const StyledGrid1 = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0 !important'
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3, 4.75),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0
    }
  }
}))

// Styled Grid component
const StyledGrid2 = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '0 !important'
  },
  [theme.breakpoints.down('md')]: {
    order: -1
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  height: '11rem',
  borderRadius: theme.shape.borderRadius
}))

const FirstPresentation = () => {
  return (
    <Card>
      <Grid container spacing={12}>
        <StyledGrid1 item xs={12} md={6} lg={7}>
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              RAMANANTSAFIDY Mariella Jonah Fitia
            </Typography>
            <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Rating readOnly value={5} name='read-only' sx={{ marginRight: 2 }} />
              <Typography variant='body2'>5 Star | 12 vues</Typography>
            </Box>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Before there was a United States of America, there were coffee houses, because how are you supposed to
              build.
            </Typography>
            <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton component='a'>
                <Facebook sx={{ color: 'blue' }} />
              </IconButton>
              <IconButton component='a'>
                <Gmail />
              </IconButton>
              <IconButton component='a'>
                <Github sx={{ color: '#272727' }} />
              </IconButton>
              <IconButton component='a'>
                <Linkedin sx={{ color: 'blueviolet' }} />
              </IconButton>
            </Box>
          </CardContent>
          {/* <CardActions className='card-action-dense' sx={{ width: '100%' }}>
            <Button>Location</Button>
            <Button>Reviews</Button>
          </CardActions> */}
        </StyledGrid1>
        <StyledGrid2 item xs={12} md={6} lg={5}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Img alt='Ramanantsafidy Jonah Fitia' src='/images/ramanantsafidy.png' />
          </CardContent>
        </StyledGrid2>
      </Grid>
    </Card>
  )
}

export default FirstPresentation
