import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divinder from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';

import {useHistory} from 'react-router-dom'
import {useDispatch} from'react-redux'
import {addTodo,delTodo} from '../store/action'
import { useSelector } from 'react-redux'


export default function Create(){
    const [judul, setJudul] = React.useState(null)
    const [deskripsi,setDeskripsi] = React.useState(null)
    const [errorValidate,seterrorValidate] = React.useState(false)
    const [ loading ,setLoading] = React.useState(false)

    const [validate, setValidate] = React.useState({
        judul:{
            error:false,
            msg:''
        },
        deskripsi:{
            error:false,
            msg:''
        }
    })
    let History = useHistory()
    let todos = useSelector(state => state.todos)
    let dispact = useDispatch()

    const Submit = () =>{
        setLoading(true)
        let valid = validate
        let error = false
        if(!judul){
            valid.judul.error = true
            valid.judul.msg = "required"
            error = true
        }else{
            valid.judul.error = false
            valid.judul.msg = ""
        }
        if(!deskripsi){
            valid.deskripsi.error = true
            valid.deskripsi.msg = "required"
            error = true
        }else{
            valid.deskripsi.error = false
            valid.deskripsi.msg = ""
        }
        
        seterrorValidate(error)
        setValidate(valid)

        if(!error){
            dispact(addTodo([{
                judul:judul,
                deskripsi:deskripsi
            }]))
            setLoading(false)
            return History.push('/')
        }else{
            setLoading(false)
        }
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{  height: '100vh' ,backgroundColor:'#fff',padding:'16px'}}>
                <h3>Tambah Yang Harus dilakukan</h3>
                <Divinder/>
                
                {errorValidate ? (
                    <Alert severity="warning">Ada Yang Salah Tuh</Alert>
                ):(
                    <span></span>
                )}
                <br></br>
                <div>
                    <TextField 
                    error={validate.judul.error}
                    id="standard-basic" 
                    label="Judul" 
                    fullWidth
                    helperText={validate.judul.msg}
                    disabled={loading}
                    onChange={(e) => setJudul(e.target.value)}
                    value={judul}
                    />
                </div>
                <br></br>
                <div>
                    <TextField 
                        id="deskripsi" 
                        label="deskripsi" 
                        fullWidth
                        error={validate.deskripsi.error}
                        helperText={validate.deskripsi.msg}
                        disabled={loading}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        value={deskripsi}
                    />
                </div>
                <br></br>
                <div>
                    <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    disabled={loading}
                    onClick={() => Submit()}
                    >Simpan</Button>
                </div>
                </Typography>
            </Container>
        </React.Fragment>
    )
}