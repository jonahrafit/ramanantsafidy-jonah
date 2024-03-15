import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MuiDivider from '@mui/material/Divider';
import { LocationEnter, Whatsapp } from 'mdi-material-ui';

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

interface BoxListProps {
  icon: JSX.Element;
  texte: string;
}

const BoxList: React.FC<BoxListProps> = ({ icon, texte }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
        {icon}
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='subtitle2'>{texte}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Coordonnee: React.FC = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardContent sx={{ pb: (theme) => `${theme.spacing(5.5)} !important` }}>
          <BoxList icon={<LocationEnter />} texte={"II Y 53 bis Avaratr'Antanimora"} />
          <BoxList icon={<LocationEnter />} texte={"Antananarivo , Madagascar"} />
          <BoxList icon={<Whatsapp />} texte={"+261 34 64 205 06"} />
          <BoxList icon={<LocationEnter />} texte={"jonahrafit.ram@hotmail.com"} />
        </CardContent>
      </Box>
    </Card>
  );
};

export default Coordonnee;
