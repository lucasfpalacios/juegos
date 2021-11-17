import { Button, Container, Box, Typography, List, ListItem} from '@mui/material';
import {useEffect, useState } from 'react';
import TitleComponent from './title';


const Catalogo = (props) => {
    const [name, setName] = useState('20$d')
    const [otroJuego, setOtroJuego] = useState('Part 1')
    const[unidad, setUnidad] = useState(1)
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const users = [
            {id: 1, name: 'God of War'},
            {id: 2, name: 'the last of us'},
            {id: 3, name: 'death stranding'},
        ]
        setUsers(users);
    }, []);

         
    const updateName = () =>{
        setName('60$d')
        setOtroJuego('Part 2')
    }

    function setUnit(){
        setUnidad(unidad + 1);  
    }
    return ( 
        <Container maxWidth='xl'>
             <Box sx={{
                    flexGrow: 1,
                    mx: 'auto',
                    marginTop: 5,
                    textAlign: 'center'
                }}> 
            <TitleComponent  name={name} otroJuego={otroJuego}/>
            <Typography variant= 'h4'>{unidad} unidad </Typography>
            <Button 
                sx={{ml: 2}}
                sx={{mb: 2}}
                sx={{mt: 2}}
                variant= 'contained'
                size='small'
                onClick={updateName} >Ver Otro juego</Button>
            <Button 
                sx={{ml: 2}}
                sx={{mt: 2}}
                variant= 'contained'
                size='small'
                onClick={setUnit}>Agregar Unidad</Button>   
                
                <List>
                    {users.map(({id, name}) => <ListItem key={id}> {name}</ListItem>)}
                </List>
            </Box>
        </Container>
    );
    
} 


export default Catalogo;