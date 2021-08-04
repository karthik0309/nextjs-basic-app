import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from '../../styles/SideBarItem.module.css'

type Props={
    title:String;
    icon:any;
    onClick:()=>void;
    dropDown?:boolean
}

const SideBarItem:React.FC<Props> = ({title,icon,onClick}) => {
    return (
        <div className={classes.sidebar__item} onClick={onClick}>
            <FontAwesomeIcon icon={icon} width={30} className={classes.sidebar__icon}/>
            <h2 className={classes.sidebar__title}>{title}</h2>
        </div>
    )
}

export default SideBarItem
