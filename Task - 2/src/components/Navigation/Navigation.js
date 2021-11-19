import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
                <nav className='navbar'>
                    <i class="fa fa-users" aria-hidden="true"></i>
                
                    <h3 className="logo">   LGM Users</h3>
                    
                    <div className='nav-links'>
                        <Button variant="contained" onClick={onButtonSubmit} color="dark">
                            Get Users
                        </Button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;