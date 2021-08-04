import React,{useState} from 'react'
import { useGlobalState } from '../../globalState/Index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from '../../styles/InputFilter.module.css'

const InputFilter = () => {

    const [filterText,setFilterText] = useState('')
    const {state,dispatch} =useGlobalState()

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setFilterText(event.target.value)
    }

    const handleSubmit=()=>{
        dispatch({type:'SET_DATA',payload:filterText})
        setFilterText('')
    }

    return (
        <div className={classes.filter__container}>
            <div className={classes.filter__content}>
                <div className={classes.filter__content__left}>
                    <p className={classes.filter__para}>Add another key word</p>
                    <div className={classes.filter__span}>
                        {state.keywords.length}/3
                    </div>
                    <p className={classes.filter__upgrade}>Upgrade</p>
                </div>
                <p >Advance search</p>
            </div>
            <div className={classes.filter__input}>
                <input type="text" 
                placeholder="Enter your filter here"
                className={classes.input__box}
                onChange={e=>handleChange(e)}
                value={filterText}/>
                <button className={classes.filter__button} onClick={handleSubmit}>Save filters</button>
                <FontAwesomeIcon icon={faSearch} width={20} className={classes.search__icon}/>
            </div>
        </div>
    )
}

export default InputFilter
