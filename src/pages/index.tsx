// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import FirstPresentation from 'src/views/dashboard/FirstPresentation'
import Coordonnee from 'src/views/dashboard/Coordonnee'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <FirstPresentation />
        </Grid>
        <Grid item xs={12} md={4}>
          <Coordonnee />
        </Grid>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
