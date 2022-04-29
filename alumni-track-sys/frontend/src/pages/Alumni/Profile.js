import React from 'react'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Profile() {

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
  return (
    <div style={{display : 'flex'}} >
        <div style={{width : '300px' , height : '400px' , backgroundColor : '#ff4a2b' ,marginRight : '30px' , marginLeft : '40px' , borderRadius : '30px' , color : 'white'}} >

        <Avatar style={{background: '#198cfe' , width : '100px' , height : '100px' , marginTop : '20px' , marginLeft : '100px'}} {...stringAvatar('Sahil Rohera')} />

        <br />
        
        <p style={{fontSize : '20px' , fontWeight : '550' , marginLeft : '40px'}} ><span style={{color : 'rgb(42 45 62)' , fontSize : '20px' , fontWeight : '550'}} >Name</span> : Sahil Rohera </p> 

        <p style={{fontSize : '20px' , fontWeight : '550' , marginLeft : '40px'}} ><span style={{color : 'rgb(42 45 62)' , fontSize : '20px' , fontWeight : '550'}} >Email</span> : rohera@gmail.com </p> 

        <p style={{fontSize : '20px' , fontWeight : '550' , marginLeft : '40px'}} ><span style={{color : 'rgb(42 45 62)' , fontSize : '20px' , fontWeight : '550'}} >College Name</span> : MAIT </p> 

        <p style={{fontSize : '20px' , fontWeight : '550' , marginLeft : '40px'}} ><span style={{color : 'rgb(42 45 62)' , fontSize : '20px' , fontWeight : '550'}} >Enrollment No. </span> : 12345 </p> 

        <p style={{fontSize : '20px' , fontWeight : '550' , marginLeft : '40px'}} ><span style={{color : 'rgb(42 45 62)' , fontSize : '20px' , fontWeight : '550'}} >Year Of Passing</span> : 2022 </p>

        </div>

        <div style={{width : '700px' , height : '400px' , backgroundColor : '#198cfe' , borderRadius : '30px' , color : 'white'}} >

            <h1 style={{textAlign : 'center' , marginTop : '20px' , fontSize : '20px' , color : 'white'}} >Personal Details</h1>

            <br />
            <br />

<div style={{marginLeft : '100px'}} >
<TextField id="outlined-basic" label="Qualification" variant="outlined" style={{marginRight : 
'40px'}} />
        <TextField id="outlined-basic" label="Currently Doing" variant="outlined" />
</div>
<br />
<br />
       <div style={{marginLeft : '100px'}}>
        <TextField id="outlined-basic" label="Further Plans" variant="outlined" style={{marginRight : 
'40px'}} />
        <TextField id="outlined-basic" label="Contact Number" variant="outlined" />

       </div>

       <br />
       <br />

       <Button variant="contained" style={{marginLeft : '260px' , backgroundColor : '#ff4a2b'}} >Update Profile</Button>

        </div>
    </div>
  )
}
