import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { EmptyState } from 'evergreen-ui';

export default function Home() {
  const n = 5;
  const [hoverOver,setHoverOver] = useState(Array.from({ length: 5 }, (v, i) => false));
  const [inBucket,setInBucket] = useState(Array.from({ length: n }, (v, i) => -1)); // all -1 at first;
  const [isDragging,setIsDragging] = useState(-1);
  const [mouseX,setMouseX] = useState(0);
  const [mouseY,setMouseY] = useState(0);

  const mouseMove = (index,tf) => {
    const newHoverOver = [...hoverOver];
    newHoverOver[index] = tf;
    setHoverOver(newHoverOver);
  }

  const generateList = () => {
    var res = [];
    for(let i = 0;i<n;i++){
      if (!inBucket.includes(i)) res.push(<li
        style={{opacity: `${1-.15*i}`, backgroundColor: "black", left: `${mouseX}px`, top: `${mouseY}px`, position: isDragging==i?'absolute':"static", transform: isDragging==i&&"translate(-50%,-50%)"}}
        // onMouseEnter={(e)=>mouseMove(i,true)} 
        // onMouseOut={(e)=>{
        //   mouseMove(i,false);
        // }}
        // onMouseDown={(e)=>setIsDragging(i)}
        // onMouseUp={(e)=>setIsDragging(-1)}
        // onMouseMove={(e)=>{
        //   setMouseX(e.clientX);
        //   setMouseY(e.clientY);
        //   console.log(mouseX,mouseY);
        // }}
        draggable="true"
        onDragStart={(e)=>{
          console.log("akjldfl")
          e.dataTransfer.setData("imageNum",i);
        }}
        >
      </li>)
    }
    return res;
  }

  const handleDrop = (e,i) => {
    const newInBucket = [...inBucket];
    console.log(e.dataTransfer.getData("imageNum"))
    newInBucket[i] = e.dataTransfer.getData("imageNum");
    setInBucket(newInBucket);
  }

  const generateBuckets = () => {
    var res = [];
    for(let i = 0;i<n;i++){
      res.push(
        
        inBucket[i]!=-1?<li 
        style={{opacity: `${1-.15*inBucket[i]}`, backgroundColor: "black"}}
        onMouseEnter={(e)=>mouseMove(i,true)} 
        onMouseOut={(e)=>mouseMove(i,false)}
      ></li>:
      <li 
        onDrop={(e)=>handleDrop(e,i)}
        // onDragEnter = {(event)=>{event.preventDefault();}}
        onDragOver = {(event)=>{event.preventDefault();}}
        // onDragLeave = {(e)=>{e.preventDefault()}}
        // onMouseUp={(e)=>{
        //   console.log(isDragging);
        //   if(isDragging>-1){
        //     const newInBucket = [...inBucket];
        //     newInBucket[i] = isDragging;
        //   }
        //}}
        >Empty</li>)
    }
    return res;
  }

  


  return (
    <div className={styles.container}>
      <section className="dndTest">
        <ul className='horizList'>
          {generateList()}
        </ul>
        <ul className="horizList">
          {generateBuckets()}
        </ul>
      </section>
    </div>
  )
}
