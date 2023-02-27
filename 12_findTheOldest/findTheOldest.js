const findTheOldest = function (arr) {
  const birthDate = arr
    .map((obj) => {
      if (obj.yearOfDeath) {
        return obj.yearOfDeath - obj.yearOfBirth;
      } else {
        return obj.yearOfBirth - new Date().getFullYear();
      }
    })
    .reduce((acc, curvalue) => {
      acc = curvalue > acc ? curvalue : acc;
      return acc;
    });
  console.log(birthDate);

  const oldest = arr.find(
    (obj) => obj.yearOfDeath - obj.yearOfBirth === birthDate
  );
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
