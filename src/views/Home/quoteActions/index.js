import { forwardRef, useState } from 'react';
import widths from './informations/widths';
import innerFinishings from './informations/innerFinishings';
import materials from './informations/materials';
import finishings from './informations/finishings';
import { messageGenerator } from './messageGenerator';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    Button,
    Card,
    CardActions,
    IconButton,
    InputAdornment,
    MenuItem,
    TextField,
    Typography,
    Tooltip
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@material-ui/core';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function QuoteActions() {
    const [name, setName] = useState(' ');
    const [number, setNumber] = useState(' ');
    const [width, setWidth] = useState(widths[0].label);
    const [innerFinishing, setInnerFinishing] = useState(innerFinishings[0].value);
    const [finishing, setFinishing] = useState(finishings[0].value);
    const [material, setMaterial] = useState(materials[0].value);
    const [weight, setWeight] = useState(0);
    const [quote, setQuote] = useState('');
    const [open, setOpen] = useState();

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    };

    const handleChangeWidth = (event) => {
        setWidth(event.target.value);
    };

    const handleChangeInnerFinishing = (event) => {
        setInnerFinishing(event.target.value);
    };

    const handleChangeFinishing = (event) => {
        setFinishing(event.target.value);
    };

    const handleChangeMaterial = (event) => {
        setMaterial(event.target.value);
    };

    const handleChangeWeight = (event) => {
        setWeight(event.target.value);
    };

    const handleSend = () => {
        window.open(`https://api.whatsapp.com/send?phone=55${number}&text=${quote}`);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function handleQuote() {
        let tempPrice = ((weight * material));
        if (!tempPrice) {
            setOpen(true);
        }
        else {
            setQuote(message);
        }
    }

    const message = messageGenerator({ name, finishing, material, width, weight, innerFinishing });

    return (
        quote.length <= 1 ?
            <Card
                sx={{
                    m: 2
                }}
                elevation={4}>
                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} sx={{ zIndex: 5000 }
                } >
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Preencha os dados da calculadora corretamente
                    </Alert>
                </Snackbar>
                <Typography
                    variant='h6'
                    sx={{
                        ml: 2,
                        mt: 2
                    }}>
                    Calculadora de Orçamentos Lazzaretti Joias
                </Typography>
                <CardActions
                    sx={{
                    }}
                >
                    <TextField
                        label='Nome do Cliente'
                        id='outlined-name'
                        sx={{ m: 2, width: '15ch' }}
                        onChange={handleChangeName}
                        value={name}
                    />
                    <TextField
                        label='Número Whatsapp'
                        id='outlined-number'
                        sx={{ m: 2, width: '15ch' }}
                        onChange={handleChangeNumber}
                        value={number}
                    />
                    <TextField
                        id='outlined-select-material'
                        sx={{ m: 2, width: '15ch' }}
                        select
                        label='Material'
                        value={material}
                        onChange={handleChangeMaterial}
                    >
                        {materials.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id='outlined-select-width'
                        sx={{ m: 2, width: '15ch' }}
                        select
                        label='Largura'
                        value={width}
                        onChange={handleChangeWidth}
                    >
                        {widths.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id='outlined-select-inner-finishing'
                        sx={{ m: 2, width: '20ch' }}
                        select
                        label='Acabamento interno'
                        value={innerFinishing}
                        onChange={handleChangeInnerFinishing}
                    >
                        {innerFinishings.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id='outlined-select-external-finishing'
                        sx={{ m: 2, width: '18ch' }}
                        select
                        label='Acabamento externo'
                        value={finishing}
                        onChange={handleChangeFinishing}
                    >
                        {finishings.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label='Peso'
                        id='outlined-start-adornment'
                        sx={{ m: 2, width: '10ch' }}
                        onChange={handleChangeWeight}
                        value={weight}
                        InputProps={{
                            endAdornment: <InputAdornment position='start'>g</InputAdornment>,
                        }}
                    />
                </CardActions>
                <CardActions sx={{
                    width: '100%'
                }}>
                    <Button
                        sx={{ ml: 2 }}
                        variant='contained'
                        onClick={() => { handleQuote() }}
                        startIcon={<AttachMoneyIcon />}
                    >
                        Calcular orçamento
                    </Button>
                </CardActions>
            </Card>
            :
            <Card sx={{
                m: 2
            }}
                elevation={4}>
                <Typography
                    variant='h6'
                    sx={{
                        ml: 2,
                        mt: 2
                    }}>
                    Seu orçamento:
                </Typography>
                <Typography
                    sx={{
                        ml: 4,
                        mt: 2
                    }}>
                    {quote}
                </Typography>
                <CardActions
                    sx={{
                        height: '100%'
                    }}
                >
                    {number.length < 9 || number === undefined ?
                        <Button
                            sx={{ ml: 2 }}
                            color={'success'}
                            variant='contained'
                            disabled
                            startIcon={<WhatsAppIcon />}
                        >
                            Enviar por Whatsapp
                        </Button>
                        :
                        <Button
                            sx={{ ml: 2 }}
                            color={'success'}
                            variant='contained'
                            onClick={() => { handleSend() }}
                            startIcon={<WhatsAppIcon />}
                        >
                            Enviar por Whatsapp
                        </Button>
                    }
                    <Button
                        sx={{ ml: 2 }}
                        color={'error'}
                        variant='contained'
                        onClick={() => { setQuote('') }}
                        startIcon={<RemoveCircleOutlineIcon />}
                    >
                        Refazer orçamento
                    </Button>
                    <Tooltip title='Copiar' arrow>
                        <IconButton
                            onClick={() => { navigator.clipboard.writeText(quote) }}
                            variant='contained'
                        >
                            <ContentCopyIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
    );
}
