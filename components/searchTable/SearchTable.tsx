import { useState,useEffect } from 'react'
import { useGlobalState } from '../../globalState/Index'
import {API} from '../../constant/constant'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from  '../../styles/SearchTable.module.css'
import axios from 'axios'

const tableHead=['Keywords','Goal','Matches','Search status','Delete keyword']

const SearchTable:React.FC = () => {

    const [fetchedData,setFetchedData] = useState([])
    const {state,dispatch} = useGlobalState()
    const {keywords} = state

    const getData=async()=>{
        try{
        const response = await axios.get(`${API}`)
        setFetchedData(response.data.data)
        }catch(err){
        console.log(err)
        }
    }

    const handleDelete=(item:string)=>{
        dispatch({type:'DELETE_DATA',payload:item})
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div className={classes.table__container}>
            {keywords.length>=3 && <p className={classes.error}>Cant filter more than 3 keywords</p>}
            <div className={classes.search__content}>
                <p>The terms you are tracking</p>
                <p className={classes.info}>Data will refresh for every 5 min</p>
            </div>
            <table className={classes.info__table}>
                <thead>
                    <tr className={classes.tr}>
                    {tableHead.map((ele,index)=>(
                        <th className={classes.th} key={index}>{ele}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {fetchedData.filter((ele:Record<string,any>)=>{
                        if(keywords.includes(ele.keyword)){
                            return ele;
                        }
                    }).map((ele:any,index)=>(
                        <tr key={ele.id} className={classes.trow}>
                            <td className={classes.data}>{ele.keyword}</td>
                            <td className={classes.data}>{ele.goal}</td>
                            <td className={classes.data}>{ele.matches}</td>
                            <td className={classes.data}>{ele.search_status}</td>
                            <td className={classes.data}>
                                <FontAwesomeIcon 
                                icon={faTrash} 
                                width={18} 
                                className={classes.delete}
                                onClick={()=>handleDelete(ele.keyword)}/>
                            </td>
                        </tr>
                    ))}
                    <tr></tr>
                </tbody>
            </table>
            <button className={classes.search__button}>View results</button>
        </div>
    )
}

export default SearchTable
