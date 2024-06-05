import { Avatar, Button } from '@mui/material'
import React from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Profile = () => {
  return (
    <div style={{border:"2px solid red",display:"flex",marginTop:"20px",justifyContent:"space-between"}}>
    <div style={{border:"2px solid red",width : "25%",height:"80vh",padding:"10px" }}>
        <h2 style={{margin:"5px 0px"}}>My Profile</h2>
        <div style={{display:"flex"}}>
        <div><Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 170, height: 170, borderRadius:2}}
/></div>
        <div style={{textAlign:"right",width:"100%"}}><Button
    sx={{ width: 70, height: 30}}
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<EditRoundedIcon />}
>
  Edit
  <VisuallyHiddenInput type="file" />
</Button>
<h5  style={{textAlign:"left",margin:"15px 0px 0px 5px", opacity:"0.9",color:"green"}}><CircleIcon style={{height:"12px"}} color = "success" />Active User</h5>
<h5 style={{textAlign:"left",margin:"15px 0px 0px 15px", opacity:"0.7"}}>First Name</h5>
<p style={{textAlign:"left",margin:"3px 15px"}}>Yash </p>
<h5 style={{textAlign:"left",margin:"15px 0px 0px 15px", opacity:"0.7"}}>Last Name</h5>
<p style={{textAlign:"left",margin:"3px 15px"}}> Patel</p>
</div>
        
    </div>
    </div>
    <div style={{border:"2px solid red",width:"72%",padding:"10px"}}>
        <h2 style={{margin:"5px 0px"}}>Basic Details</h2>
    </div>
    </div>
  )
}

export default Profile