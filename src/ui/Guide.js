import React, {useEffect, useRef} from 'react'

const Guide = ({ LOC }) => {
    // LOC.exist && console.log(LOC)
    const REF_HALO = useRef()

    if(!LOC){
      return false
    }else{
      // console.log(`Guide | move to:`, LOC) //> check LOCation
    }
  
    
    
    
    // useEffect(()=>{
    //   console.log(`HALO | lo`)
    //     let tl = gsap.timeline({repeat: -1, repeatDelay: 0});
    //     tl.to([REF_HALO.current], { duration: 1, repeat: -1,  outlineOffset: '0px', ease: 'Power1.easeInOut'})
    //     setTimeout(() => {
          
    //       tl.pause()
    //     }, 1000);
        
    //     return () => tl.pause()
    // }, [LOC.l, LOC.t])
  
  
    return (
      <div
      ref={REF_HALO}
      onClick={e=>{e.preventDefault(), e.stopPropagation()}}
        style={{
          position: "absolute",
          display: 'block',
          zIndex: 10000,
          borderRadius: ".5rem",
          opacity: LOC.E ? "1" : "0",
          border: "1px solid",
          borderColor: "red",
          width: `${LOC.W}px`,
          height: `${LOC.H}px`,
          top: `${LOC.T}px`,
          left: `${LOC.L}px`,
          // boxShadow: `0 0 10000px 10000px grey`,
          transition: "all .5s, opacity .2s",
          // outline: '3px solid',
          // outlineOffset: '100px',
          // outlineColor: 'primary_b',
          // transition: '.5s'
          pointerEvents: 'none'
        }}
      ></div>
    );
  };
  export default Guide