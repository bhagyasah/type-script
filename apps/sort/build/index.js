"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -1, -2, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);
var characterCollection = new CharacterCollection_1.CharacterCollection('bazfasjl');
// const sorter1 = new Sorter(characterCollection);
// sorter1.sort()
characterCollection.sort();
console.log(characterCollection.data);
