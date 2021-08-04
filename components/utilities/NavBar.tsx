import React,{useState} from 'react'
import { useGlobalState } from '../../globalState/Index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from '../../styles/NavBar.module.css'

type Props={
    handleClick:()=>void
}

const NavBar:React.FC<Props> = ({handleClick}) => {

    const [filterText,setFilterText] = useState('')
    const {dispatch} =useGlobalState()

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setFilterText(event.target.value)
    }

    const handleSubmit=()=>{
        dispatch({type:'SET_DATA',payload:filterText})
        setFilterText('')
    }
    return (
        <div className={classes.nav__container} onClick={handleClick}>
            <div className={classes.hamburger}>
                <div className={classes.h1}></div>
                <div className={classes.h1}></div>
                <div className={classes.h1}></div>
            </div>
            <h2 className={classes.nav__header}>KEYWORDS</h2>
            <div className={classes.search__box}>
                <input type="text" className={classes.nav__input}
                 onChange={e=>handleChange(e)}
                 value={filterText}/>
                <button className={classes.nav__button} onClick={handleSubmit}>
                    SUBMIT
                    <FontAwesomeIcon icon={faArrowRight} className={classes.icon}/>
                </button>
            </div>
            <div className={classes.nav__image}>
                A
            </div>
        </div>
    )
}

export default NavBar
