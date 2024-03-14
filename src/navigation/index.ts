// ** Icon imports
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

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
      icon: FormatLetterCase,
      path: '/experiences-professionnelles'
    },
    {
      title: 'Mes Compétences',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Mes réalisations',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      icon: CubeOutline,
      title: 'Contact',
      path: '/form-layouts'
    }
  ]
}

export default navigation
