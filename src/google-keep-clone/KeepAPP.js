import React from 'react';
import { useState } from 'react';
import Head from './Head';
import "./Keep.css";
import CreteNote from './CreteNote';
import Addnote from './Addnote';
import Foter from './Footer';
import { useEffect } from 'react';


const getlocalStorageData =()=>{
  const lists = localStorage.getItem("myKeepapp")
  if (lists){
    return JSON.parse(lists)
  }
  else{
    return [];
  }
}

const Keep = () => {

  const [noteData , setnoteData] =useState(getlocalStorageData())
  const onSubmit = (inputData)=>{

      setnoteData((preValue)=>{
        return[...preValue, inputData]
       });
    
  }

  const  deleteNote =(id)=>{
        const updateNoteData = noteData.filter((curelem, index)=>{
          return  index !== id;
        })
        setnoteData(updateNoteData);
  }

  const searchFun =(searchData)=>{
      const searchItems = noteData.filter((curelem, index)=>{
        return  curelem.title === searchData;  
         })
         setnoteData(searchItems);
   }

   const getAllNotes=(allnotesData)=>{
    setnoteData(allnotesData);
   }

  useEffect(()=>{
    localStorage.setItem("myKeepapp", JSON.stringify(noteData))
  })
  return (
    <>
        <Head  searchNote = {searchFun}
          allNotes = {noteData}
          passAllNote = {getAllNotes}
        />
        <CreteNote  
         passData ={onSubmit}
         />
        <Addnote  
          passnoteData = {noteData} 
          DeleteData ={deleteNote}
         />
         <Foter/>
    </>
  )
}

export default Keep
