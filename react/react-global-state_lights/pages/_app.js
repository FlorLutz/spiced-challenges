import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const [dimmed, setDimmed] = useState(true);

  useEffect(() => {
    function checkLightsOff() {
      console.log("alllightsout", !lights.some((light) => light.isOn === true));
      lights.some((light) => light.isOn === true)
        ? setDimmed(false)
        : setDimmed(true);
    }
    checkLightsOff();
  });

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        return light.id === id ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  function handleTurnAllOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  function handleTurnAllOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  return (
    <Layout isDimmed={dimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        handleTurnAllOn={handleTurnAllOn}
        handleTurnAllOff={handleTurnAllOff}
      />
    </Layout>
  );
}
