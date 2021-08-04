import React,{useState} from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Layout:React.FC = ({children}) => {
    const [navClick,setNavClick] = useState(false)

    const handleNavClick=()=>{
        setNavClick(!navClick)
    }

    return (
        <div>
            <SideBar showSideBar={navClick} handleClick={handleNavClick}/>
            <NavBar handleClick={handleNavClick}/>
            {children}
        </div>
    )
}

export default Layout
