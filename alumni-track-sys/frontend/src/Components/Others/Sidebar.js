import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function Sidebar() {
  return (
    <div className='SideBar' >

   <br />
  

      <div className="Sidebar-heading">
        <p className='heading' > Alumni Connect </p> 
      </div>

      <br />
      <br />
     

      <br />
         <div className="sidebar-item">
           <div style={{display : 'flex' , marginLeft : '30px' , marginTop : '10px'}} >
           <DashboardIcon/>
           <p className='sidebar-item-title'  >Dashboard</p>
           </div> 
         </div>

         <br />

         <div className="sidebar-item">
           <div style={{display : 'flex' , marginLeft : '30px' , marginTop : '10px'}} >
           <CalendarMonthIcon/>
           <p className='sidebar-item-title'  >Calendar</p> 
           </div>
         </div>
         <br />


         <div className="sidebar-item">
           <div style={{display : 'flex' , marginLeft : '30px' , marginTop : '10px'}}  >
           <ChatIcon/>
           <p className='sidebar-item-title' >Chat</p> 
           </div>
         </div>
         <br />

         <div className="sidebar-item">
         <div style={{display : 'flex' , marginLeft : '30px' , marginTop : '10px'}}  >
           <VideoCallIcon/>
           <p className='sidebar-item-title'  >Video Call</p> 
           </div>
         </div>
         <br />

         <div className="sidebar-item">
         <div style={{display : 'flex' , marginLeft : '30px' , marginTop : '10px'}}  >
           <AssignmentIcon/>
           <p className='sidebar-item-title'  >Notices</p> 
           </div>
         </div>
    </div>
  )
}
