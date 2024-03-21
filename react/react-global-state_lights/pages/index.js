import Link from "../components/Link";

export default function HomePage({ lights }) {
  let lightsTurnedOn = 0;
  for (let light of lights) {
    light.isOn && lightsTurnedOn++;
  }

  return (
    <div>
      <h1>Home</h1>
      <p>{`${lightsTurnedOn} light(s) are on.`}</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
