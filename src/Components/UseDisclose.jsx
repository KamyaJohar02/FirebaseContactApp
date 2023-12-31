import { useState } from "react";

const UseDisclose = () => {
    const[isOpen, setOpen]= useState(false);//custom hooks

  const Onopen = () => {
    setOpen(true)
  }
  const OnClose = () => {
    console.log("closing modal");
    setOpen(false)
  }
  return (
    {OnClose,Onopen,isOpen}
  )
  
}

export default UseDisclose
