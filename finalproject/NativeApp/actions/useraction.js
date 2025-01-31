import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, GET_ALARMS, MOVE_ROBOT,ITEMS_LOADING,GET_USER, ADD_ALARM, EDIT_ALARM, DELETE_ALARM, GET_HISTORY, EDIT_USER, GET_MEDIA, ADD_MEDIA, IP_ADDRESS, NOTIFY_CLEAN, NOTIFY_BATTERY, GET_CLEAN, GET_BATTERY } from "./types"
import axios from 'axios';
export const getuser = (user) => dispatch =>{
    axios.post('http://'+IP_ADDRESS+':5000/users/login', user).then(res=>
        dispatch({
                type: GET_USER,
                payload: res.data
            })).catch((error)=>{
                console.log("Api call error");
                alert(error.message);
             });
}
export const moverobot = (id,dir) => dispatch =>{
    dispatch(itemloading());
    axios.post('http://'+IP_ADDRESS+':5000/users/move/'+id+'/dir/'+dir).then(res=>
        dispatch({
        type:MOVE_ROBOT,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const edituser = (user) => dispatch =>{
    dispatch(itemloading());
    axios.put('http://'+IP_ADDRESS+':5000/users/update/',user).then(res=>
        dispatch({
        type:EDIT_USER,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const getalarms = (machineid) => dispatch =>{
    dispatch(itemloading());
    axios.get('http://'+IP_ADDRESS+':5000/users/alarms/'+machineid).then(res=>
        dispatch({
        type:GET_ALARMS,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const gethistory = (machineid) => dispatch =>{
    dispatch(itemloading());
    axios.get('http://'+IP_ADDRESS+':5000/machine/history/'+machineid).then(res=>
        dispatch({
        type:GET_HISTORY,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const getmedia = (id) => dispatch =>{
    dispatch(itemloading());
    axios.get('http://'+IP_ADDRESS+':5000/users/getmedia/'+id).then(res=>
        dispatch({
        type:GET_MEDIA,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const getclean = (id) => dispatch =>{
    dispatch(itemloading());
    axios.get('http://'+IP_ADDRESS+':5000/users/settings/'+id+'/clean').then(res=>
        dispatch({
        type:GET_CLEAN,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const getbattery = (id) => dispatch =>{
    dispatch(itemloading());
    axios.get('http://'+IP_ADDRESS+':5000/users/settings/'+id+'/battery').then(res=>
        dispatch({
        type:GET_BATTERY,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const addmedia = (id,media) => dispatch =>{
    axios.post('http://'+IP_ADDRESS+':5000/users/media/'+id, media).then(res=>
        dispatch({
                type: ADD_MEDIA,
                payload: res.data
            })).catch((error)=>{
                console.log("Api call error");
                alert(error.message);
             });
}
export const addalarm = (machineid,alarm) => dispatch =>{
    axios.post('http://'+IP_ADDRESS+':5000/users/addalarm/'+machineid, alarm ).then(res=>
        dispatch({
                type: ADD_ALARM,
                payload: res.data
            })).catch((error)=>{
                console.log("Api call error");
                alert(error.message);
             });
}
export const editalarm = (machineid,alarm) => dispatch =>{
    dispatch(itemloading());
    axios.put('http://'+IP_ADDRESS+':5000/users/editalarm/'+machineid+'/alarm/'+alarm._id,alarm).then(res=>
        dispatch({
        type:EDIT_ALARM,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const notifyclean = (userid) => dispatch =>{
    dispatch(itemloading());
    axios.put('http://'+IP_ADDRESS+':5000/users/settings/'+userid+'/clean').then(res=>
        dispatch({
        type:NOTIFY_CLEAN,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const notifybattery = (userid) => dispatch =>{
    dispatch(itemloading());
    axios.put('http://'+IP_ADDRESS+':5000/users/settings/'+userid+'/battery').then(res=>
        dispatch({
        type:NOTIFY_BATTERY,
        payload: res.data
    })).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
}
export const deletealarm = (machineid,id) => dispatch =>{
    axios.delete('http://'+IP_ADDRESS+':5000/users/deletealarm/'+machineid+'/alarm/'+id).then(res=>
        
        dispatch({
                type: DELETE_ALARM,
                payload: id
            })
            
                );
}
export const itemloading = () =>{
    return{
        type:ITEMS_LOADING,
    };
}