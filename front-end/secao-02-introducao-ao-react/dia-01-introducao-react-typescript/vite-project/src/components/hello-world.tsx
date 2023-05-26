import ModuleDetails from './module-details';
import Title from './title';
import { calculateAge } from '../utils/age';

function HelloWorld() {
  const name = 'Frederico';
  const birth = '10/04/1995';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}
export default HelloWorld;
