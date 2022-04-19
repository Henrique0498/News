import React, { useEffect, useRef } from 'react'

interface InfiniteScrollProps {
  fetchMore: ()=> void
}

const InfiniteScroll = ({ fetchMore }: InfiniteScrollProps) => {
  const currentRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        observer.disconnect();
        fetchMore();
      }
    }, options);

    currentRef.current && observer.observe(currentRef.current)

    return () => {
      observer.disconnect();
    }
  }, [fetchMore])

  return <div ref={currentRef}/>
}

export default InfiniteScroll