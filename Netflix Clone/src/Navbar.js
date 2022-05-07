import React from 'react'
import './Navbar.css'
class Navbar extends React.Component {
  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

  render(){
  return (
    <div>
    <div className={`Nav ${this.state.nav && 'Nav__black'}`}>
    <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Netflix' style={{width :' 100px'}} className='Nav__logo'/>
    <img src='https://pbs.twimg.com/media/Eh6d9HRXYAEFZ9W?format=png&name=small' alt='user' style={{width :' 50px'}} />
    </div>
    </div>
  );}
}
export default Navbar
