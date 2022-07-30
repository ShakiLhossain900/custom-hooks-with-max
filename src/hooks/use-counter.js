import React,{useState,useEffect} from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default useCounter;