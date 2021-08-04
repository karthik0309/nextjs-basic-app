import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import SideBarItem from './SideBarItem';
import { faHome,faUsers,faStar,faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo.png";
import classes from '../../styles/SideBar.module.css'

const sideBarItems=[
    {
        title:"Add Keywords",
        icon:faHome
    },
    {
        title:"Matches",
        icon:faUsers,
    },
    {
        title:"Manage source",
        icon:faWindowMaximize,
    },
    {
        title:"Integration",
        icon:faWindowMaximize
    },
    {
        title:"Alerts",
        icon:faWindowMaximize,
    },
    {
        title:"Settings",
        icon:faStar,
        
    }
]

type Props={
    showSideBar:boolean;
    handleClick:()=>void
}

const SideBar:React.FC<Props> = ({showSideBar,handleClick}) => {

    const [sideBarClass,setSideBarClass] = useState([classes.sidebar__container])

    const handleSideBar=()=>{
        if(showSideBar===true){
            setSideBarClass([classes.sidebar__container,classes.active])
        }else{
            setSideBarClass([classes.sidebar__container])
        }
    }

    useEffect(()=>{
        handleSideBar()
    },[showSideBar])

    return (
        <div className={sideBarClass.join(" ")}>
            <div className={classes.logo__container}>
                <Image src={Logo} alt="logo" className={classes.img}/>
                <h2>Term<span>Monitor</span></h2>
            </div>
            <div className={classes.sidebar__actions}>
                {sideBarItems.map((ele,index)=>(
                    <SideBarItem 
                    title={ele.title} 
                    icon={ele.icon} 
                    key={index}
                    onClick={handleClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar
