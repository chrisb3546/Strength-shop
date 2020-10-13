import React from 'react'
import { Link, useHistory} from 'react-router-dom'


export default function NavbarLoggedOut() {
    console.log(useHistory())
    const history = useHistory()
    return (
        <div>
            <div>
                <div className="grid-container">
                    <header className="header">
                        <div className="brand">
                        <Link to='/'>Strength Shop</Link>
                        </div>
                        <div className="header-links">
                            <a onClick={() => history.push('/login')} >Log in</a>
                            <a onClick={() => history.push('/signup')}>Sign up</a>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}
