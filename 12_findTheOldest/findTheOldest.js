const getAge = function(person) {
  let yearOfDeath = person.yearOfDeath ?? new Date().getFullYear();
  return yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(persons) {
  return persons.reduce((oldest, currentPerson) => {
    let personAge = getAge(currentPerson)
    let oldestPersonAge = getAge(oldest);
    if(personAge > oldestPersonAge) return currentPerson
    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
