
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
export default function Houses({setName}) {

  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];

  return (
    <>
      <Header title="Houses" />
      <ul>
        {houses.map(house => <li key={house} ><Link to={`/houses/${house}`}>{house}</Link></li>)}
      </ul>
    </>
  )
}