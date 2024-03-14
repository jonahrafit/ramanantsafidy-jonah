// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'

// Icon
import { Facebook, Github, Linkedin, Gmail } from 'mdi-material-ui'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const SvgStyled = styled('img')(({ theme }) => ({
  width: '25px',
  marginRight: theme.spacing(6.25),
  borderRadius: 35,
  cursor: 'pointer'
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton component='a' onClick={e => e.preventDefault()}>
          <Facebook sx={{ color: 'blue' }} />
        </IconButton>
        <IconButton component='a' onClick={e => e.preventDefault()}>
          <Gmail />
        </IconButton>
        <IconButton component='a' onClick={e => e.preventDefault()}>
          <Github sx={{ color: '#272727' }} />
        </IconButton>
        <IconButton component='a' onClick={e => e.preventDefault()}>
          <Linkedin sx={{ color: 'blueviolet' }} />
        </IconButton>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
    </Box >
  )
}

export default AppBarContent
