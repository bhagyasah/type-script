import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';

const numbersCollection = new NumbersCollection([10,3,-1,-2,0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data)

const characterCollection = new CharacterCollection('bazfasjl')
// const sorter1 = new Sorter(characterCollection);
// sorter1.sort()
characterCollection.sort();
console.log(characterCollection.data)