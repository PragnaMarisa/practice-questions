const people = [
  {
    name: "rahul",
    age: 33,
    work: "software engineer",
    place: "Pune",
    hobbies: ["playing chess", "gardening when he's not busy coding"],
    car: true,
    studies: ["computer science"],
    books: [],
    employed: true,
    pets: [
      {
        type: "golden retriever Dog",
        name: "Max",
        age: 4,
        vaccinated: true,
        fullyvaccinated: true,
        favouriteactivity: ["loves playing fetch in the park"],
      },
    ],
  },

  {
    name: "ananya",
    age: 30,
    work: "chef",
    place: "Banglore",
    hobbies: [
      "passionate about cooking and often experiments with Italian recipes",
    ],
    car: false,
    studies: ["computer science", "minor in graphic design"],
    books: [],
    employed: false,
    pets: [
      {
        type: "parrot",
        name: "Kiwi",
        age: 1,
        vaccinated: true,
        fullyvaccinated: false,
        hobbies: ["who knows over 20 phrases", "mimics her voice"],
        favouriteactivity: null,
      },
    ],
  },

  {
    name: "ramesh",
    age: 45,
    work: "Business Owner",
    place: "Jaipur",
    hobbies: ["love of gardening", "reading historical fiction"],
    car: false,
    studies: [],
    books: ["historical fiction"],
    employed: true,
    pets: [
      {
        type: "cat",
        name: "bella",
        age: 3,
        vaccinated: true,
        fullyvaccinated: true,
        favouriteactivity: ["love lounging in the sun"],
      },
      {
        type: "cat",
        name: "leo",
        age: 3,
        vaccinated: true,
        fullyvaccinated: true,
        favouriteactivity: ["love lounging in the sun"],
      },
    ],
  },

  {
    name: "kavya",
    age: 28,
    work: "Profesional Dancer",
    place: "Chennai",
    hobbies: [
      "prefers modern fantasy novels",
      "binge-watching sci-fi shows in her downtime",
    ],
    car: false,
    studies: [],
    books: ["modern fantasy novels"],
    employed: false,
    pets: [
      {
        type: "rabbit",
        name: "Snowy",
        age: 2,
        vaccinated: true,
        fullyvaccinated: false,
        favouriteactivity: [
          "enjoys hopping around her backyard",
          "nibbling on carrots",
        ],
      },
    ],
  },
];

const pets = people.flatMap((person) => person.pets);

// 1. How many individuals are currently employed?

const countOfCurrentlyEmployed = (people) =>
  people.filter((person) => person.employed).length;

// 2. How many people own a car?

const countOfPeopleOwnsACar = (people) =>
  people.filter((person) => person.car).length;

// 3. How many pets are fully vaccinated?

const countOfVaccinatedPets = (pets) => {
  return pets.filter((pet) => pet.fullyvaccinated).length;
};

// 4. What are the names of all the pets, and what type of animal is each?

const namesOfPetsWithType = (pets) => {
  return pets.map(({ name, type }) => ({ name, type }));
};

// 5. Which cities do the individuals live in?

const namesOfCitesPeopleLiving = (people) =>
  people.map((person) => person.place);

// 6. How many hobbies are shared across the group? What are they?

const hobbiesOfPeople = (people) => {
  const peopleHobbies = people.flatMap((person) => person.hobbies);
  return [peopleHobbies.length, peopleHobbies];
};

// 7. How many pets belong to people who are currently unemployed?

const countPetsOfUnEmployed = (people) => {
  return people
    .filter((person) => !person.employed)
    .flatMap((person) => person.pets).length;
};

// 8. What is the average age of the individuals mentioned in the passage?

const averageAgeOfIndividual = (people) => {
  const sumOfAges = people.reduce(
    (accumlator, person) => accumlator + person.age,
    0
  );
  return sumOfAges / people.length;
};

// 9. How many individuals have studied computer science, and how many of them have pets?

const petsOfIndividualStudiedCS = (people) => {
  return people
    .filter(({ studies }) => studies.includes("computer science"))
    .filter(({ pets }) => pets.length !== 0);

  // return [individualWhoStudiedCS.length, countOfPets.length];
};

// 10. How many individuals own more than one pet?

const countOfOwnersWhoHasMoreThanOnePet = (people) =>
  people.filter(({ pets }) => pets.length > 1).length;

// 11. Which pets are associated with specific favorite activities?

const petsWithSpecificAcitivities = (pets) => {
  return pets
    .filter(({ favouriteactivity }) => favouriteactivity !== null)
    .map(({ name }) => name);
};

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petsBelongToBangloreOrChennai = (people) => {
  return people
    .filter(({ place }) => ["Banglore", "Chennai"].includes(place))
    .flatMap(({ pets }) => pets)
    .map(({ name }) => name);
};

// 13. How many vaccinated pets belong to people who do not own a car?

const vaccinatedPetsOfPeopleDontOwnCar = (people) => {
  return people
    .filter(({ car }) => !car)
    .flatMap(({ pets }) => pets)
    .filter(({ vaccinated }) => vaccinated).length;
};

// 14. What is the most common type of pet among the group?

const getCountOfIndividual = (array) => {
  return array.reduce((accumlator, { type }) => {
    accumlator[type] = type in accumlator ? accumlator[type] + 1 : 1;
    return accumlator;
  }, {});
};

const getCommonPet = (pets) => {
  const countOfIndividualPets = Object.entries(getCountOfIndividual(pets));

  return countOfIndividualPets.reduce(([_, pet1Count], [pet, pet2Count]) =>
    pet2Count > pet1Count ? [pet, pet2Count] : [_, pet1Count]
  )[0];
};

// 15. How many individuals have more than two hobbies?

const individualsHavingMoreThanTwoHobbies = (people) =>
  people.filter(({ hobbies }) => hobbies.length > 2).length;

// 16. How many individuals share at least one hobby with Ramesh?

// 17. Which pet is the youngest, and what is its name?

const getYoungestPet = (pets) => {
  return pets.reduce((youngestPet, pet) =>
    pet.age < youngestPet.age ? pet : youngestPet
  ).name;
};

// 18. What types of books are mentioned as interests, and who reads them?

const getInterests = (people) =>
  people
    .filter(({ books }) => books.length > 0)
    .map(({ name, books }) => ({ name, books }));

// 19. How many individuals live in cities starting with the letter "B"?

const individualsLivingInCityStartingWithB = (people) =>
  people.filter(({ place }) => place.startsWith("B")).length;

// 20. Which individuals do not own any pets?

const peopleWithNoPets = (people) =>
  people.filter(({ pets }) => pets.length === 0).length;

const everyPredicate =
  (...predicates) =>
  (value) =>
    predicates.every((predicate) => predicate(value));
