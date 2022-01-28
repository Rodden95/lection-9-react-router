import { useParams } from 'react-router-dom';
import { fetchAllChars } from '../services';
import { useEffect, useState, useMemo } from 'react';
export default function Char () {
  const [charArr, setCharArr] = useState(null);
  let { charName } = useParams();
 
  useEffect(() => {
    fetchAllChars().then(res =>
      setCharArr(res.find(({ name }) => charName === name))
    )
  }, [charName])
    
    //  console.log(charArr.alternate_names);
  return (
    <div>
      {charArr && <>
        <h1>name: {charArr.name}</h1>
        <div>actor : {charArr.actor || 'none'}</div>
        <div>alternate names : {
          charArr.alternate_names.length === 0 ? 'none' : charArr.alternate_names
        }</div>
        <div>gender : {charArr.gender || 'none'}</div>
        <div>hair colour : {charArr.hairColour || 'none'}</div>
        <div>wizard : {`${charArr.wizard}`}</div>
      </>
      }
    </div>
  )
}