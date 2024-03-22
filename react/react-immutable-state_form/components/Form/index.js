import { useState } from "react";
import { useImmer } from "use-immer";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  // useState:
  // const [mountain, setMountain] = useState({
  //   name: "Mount Everest",
  //   values: {
  //     altitude: 8848,
  //     mountainRange: "Himalayas",
  //   },
  // });

  // function handleNameChange(event) {
  //   setMountain({ ...mountain, name: event.target.value });
  // }

  // function handleAltitudeChange(event) {
  //   setMountain({
  //     ...mountain,
  //     values: { ...mountain.values, altitude: event.target.value },
  //   });
  // }

  // function handleMountainRangeChange(event) {
  //   setMountain({
  //     ...mountain,
  //     values: { ...mountain.values, mountainRange: event.target.value },
  //   });
  // }

  // useImmer:
  const [mountain, setMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    setMountain((prevMountain) => {
      prevMountain.name = event.target.value;
    });
  }

  function handleAltitudeChange(event) {
    setMountain((prevMountain) => {
      prevMountain.values.altitude = event.target.value;
    });
  }

  function handleMountainRangeChange(event) {
    setMountain((prevMountain) => {
      prevMountain.values.mountainRange = event.target.value;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
