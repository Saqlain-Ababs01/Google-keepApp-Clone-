import React, { useEffect, useState } from 'react'


const getlocalData=()=>{
  const lists = localStorage.getItem("Allnotes")
  if (lists){
    return JSON.parse(lists)
  }
  else{
    return [];
  }
}
const Head = (props) => {

  const [toogleButton, setToggleButton] = useState(false);
  const [allnotesData , setallnotesData] = useState(getlocalData());
  const [searchData , setsearchData] = useState();

  const addSearchData = (event)=>{
    setsearchData(event.target.value);
}
console.log(searchData);

  const pasSearchData =()=>{
   
    setallnotesData(props.allNotes)
           props.searchNote(searchData);
           setToggleButton(true);
  }

  const changeButton =()=>{
    props.passAllNote(allnotesData)
         setToggleButton(false)
         setsearchData("")
        //  console.log("all notes",props.allNotes);
        
  }

  useEffect(()=>{
    localStorage.setItem("Allnotes", JSON.stringify(allnotesData))
  })

 
  return (
    <>
          <div className='header'>
            <div className='head'>
                <img src='./images/logo.png' alt='logo'/>
                <h2>KeepApp</h2>
                </div>
                {
                  toogleButton? <div className="home-Button"> <button onClick={changeButton}>:Home</button> </div> : <>
                   <div className='input'>
                       <input type='text' placeholder='Search Title...' name='Search'  onChange={addSearchData} value={searchData}/> </div>
                    <div className='Search-Button'> 
                    <button  onClick={pasSearchData}>Search</button>
                    </div>
                    </>
                }
          </div>
    </>
  )
}

export default Head;

//<button  onClick={pasSearchData}>Search</button>

 /* <div className='input'>
                       <input type='text' placeholder='search title' name='Search'  onChange={addSearchData} value={searchData}/>
                    <div className='Search-Button'> 
                    {toogleButton?  <button onClick={changeButton}>Home</button> :  <button  onClick={pasSearchData}>Search</button> }
                    </div>
                </div> */

