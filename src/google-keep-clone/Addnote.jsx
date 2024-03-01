import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Addnote = ({passnoteData, DeleteData}) => {
  return (
    <>
      <div className='main-note-div'>
        {passnoteData.map((curelem ,index)=>{

            return(
        <div className='Add-Note' key={index}>
                  <div className='Title-Note'>
                     <h4>{curelem.title}</h4>
                 </div>
                  <div className='note-para'>
                   <p>{curelem.note}</p>
                  </div>
                 <div className='note-button'>
                   <Button  onClick={()=> DeleteData(index)}><DeleteIcon className="del"/></Button>
                 </div>
                 </div> 
            )
        })}
        </div> 
    </>
  )
}

export default Addnote
