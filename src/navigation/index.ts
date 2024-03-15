// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import { CardAccountDetailsOutline } from 'mdi-material-ui'
import Laptop from 'mdi-material-ui/Laptop'
import ProfessionalHexagon from 'mdi-material-ui/ProfessionalHexagon'
import MedalOutline from 'mdi-material-ui/MedalOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'A propos',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Portfolio'
    },
    {
      title: 'Mes Expériences pro',
      icon: ProfessionalHexagon,
      path: '/experiences-professionnelles'
    },
    {
      title: "Domaine d'expertise",
      path: '/icons',
      icon: Laptop
    },
    {
      title: 'Mes réalisations',
      icon: MedalOutline,
      path: '/cards'
    },
    {
      icon: CardAccountDetailsOutline,
      title: 'Contact',
      path: '/form-layouts'
    }
  ]
}

export default navigation
