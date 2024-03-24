export function getAnimal(animalPluralName) {
  if (!animalPluralName) {
    return "I do not like animals at all!";
  } else if (animalPluralName === "cats") {
    return "I totally love cats!";
  } else {
    return `I like ${animalPluralName}!`;
  }
}
