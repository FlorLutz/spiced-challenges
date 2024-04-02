import Chance from "chance";

export default function handler(req, resp) {
  const chance = new Chance();
  const character = {
    firstName: chance.name().split(" ")[0],
    lastName: chance.name().split(" ")[1],
    age: chance.age,
    twitterName: chance.twitter(),
    geoHash: chance.geohash(),
  };
  console.log(character);
  resp.status(200).json(character);
}
