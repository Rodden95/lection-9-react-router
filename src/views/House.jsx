
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchHousesChars } from '../services';
import shortId from 'shortid';

export default function House(){
  let { currentHouse } = useParams();
  const [houseName, setHouseName] = useState(null);
  // console.log(params);
  // const id  = 
  useEffect(() => {
    fetchHousesChars(currentHouse).then(res => setHouseName(res))
    return 'unmount'
  }, [currentHouse]);
  return (
    <ul>
      {houseName && houseName.map(char => <li key={shortId.generate()}>
        <Link to={`/houses/house/${char.name}`}>{char.name}</Link>
        {/* {char.name} */}
      </li>)}
    </ul>
  )
};