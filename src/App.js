import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import background from './assets/bgLogo.jpg';
import { CardMedia } from '@mui/material';
import QuoteActions from './views/Home/quoteActions/index';

export default function App() {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#e6e6e6',
                height: '100vh',
                width: '100vw'
            }}>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '95%',
                height: '95%'
            }}>
                <CardMedia
                    src={background}
                    component='img'
                    sx={{
                        width: '100%',
                        alignItems: 'center'
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <QuoteActions />
                </Box>
            </Card>
        </Box>
    );
}
