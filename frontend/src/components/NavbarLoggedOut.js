import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import CategoryContainer from '../containers/CategoryContainer'


export default function NavbarLoggedOut() {
    

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open")
    }

    const history = useHistory()
    return (
        <div>
            <div>
               <div className="grid-container">
                    <header className="header">
                        <div className="brand">
                        <button onClick={openMenu}>
                        &#9776;
                        </button >
                        <Link to='/'>Strength Shop</Link>
                        <CategoryContainer/>
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
