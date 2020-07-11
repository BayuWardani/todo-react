import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Divinder from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';
import {addTodo,delTodo} from '../store/action'

import {useHistory} from 'react-router-dom'

import { useSelector } from 'react-redux'
import {useDispatch} from'react-redux'


function ListItemData(props){
    let todo = props.todo
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={todo.judul}
                secondary={todo.deskripsi}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>props.handleDelete(props.index)}>
                <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default function Index(){
    let History = useHistory()
    let todos = useSelector(state => state.todos)
    let dispatch = useDispatch()
    
    const handleDelete = (index) => {
        dispatch(delTodo(index))    
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{  height: '100vh' ,backgroundColor:'#fff',padding:'16px'}}>
                    <div style={{
                        textAlign:'right',
                        marginTop:'10px',
                        marginBottom:'10px'
                    }}>
                        <Button variant="contained"
                            onClick={(e) => History.push('/create')}
                        >Tambah</Button>
                       
                    </div>
                    <Divinder/>
                    <br></br>
                    <div >
                            {todos.length > 0 ? (
                                <List>
                                    {
                                        todos.map((todo,i) => {
                                            return (<ListItemData todo={todo} index={i} handleDelete={(i)=>handleDelete(i)}/>)
                                        })
                                    }
                                </List>
                            ): (
                                <Alert severity="info">
                                    Belum Ada Yang Harus di lakukan, santai sek slurr
                                </Alert>
                            )}
                    </div>

                </Typography>
            </Container>
        </React.Fragment>
    )
}