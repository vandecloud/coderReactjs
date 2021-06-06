import React, {Fragment} from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const Navbar = () => {
    return(
        <Fragment>
            <AppBar>
                <Toolbar>
                    <Typography variant = 'h6'>
                        Desarollando mi Navbar
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
        
    )
}

export default Navbar