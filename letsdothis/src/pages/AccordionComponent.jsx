import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Slider,
} from "@mui/material";

export default function AccordionComponent(props) {
  const [yourAssets, setYourAssets] = useState([
    {
      id: 1,
      inputTitle: "Real estate",
      value: 650,
      onChange: (event) => handleInputChange(1, event),
    },
    {
      id: 2,
      inputTitle: "Personal property",
      value: 130,
      onChange: (event) => handleInputChange(2, event),
    },
    {
      id: 3,
      inputTitle: "Investments",
      value: 110,
      onChange: (event) => handleInputChange(3, event),
    },
    {
      id: 4,
      inputTitle: "Cash",
      value: 190,
      onChange: (event) => handleInputChange(4, event),
    },
  ]);
  const [yourLiabilities, setYourLiabilities] = useState([
    {
      id: 1,
      inputTitle: "Mortagage balance",
      value: 650,
      onChange: (event) => handleLiabilityInputChange(1, event),
    },
    {
      id: 2,
      inputTitle: "Loan balances",
      value: 130,
      onChange: (event) => handleLiabilityInputChange(2, event),
    },
    {
      id: 3,
      inputTitle: "Credit card debt",
      value: 110,
      onChange: (event) => handleLiabilityInputChange(3, event),
    },
  ]);

  const handleInputChange = (id, event) => {
    setYourAssets((prevAssets) =>
      prevAssets.map((asset) =>
        asset.id === id ? { ...asset, value: event.target.value } : asset
      )
    );
  };
  const handleLiabilityInputChange = (id, event) => {
    setYourLiabilities((prevAssets) =>
      prevAssets.map((asset) =>
        asset.id === id ? { ...asset, value: event.target.value } : asset
      )
    );
  };
  const sumOfAssetValues = yourAssets.reduce(
    (total, asset) => total + parseFloat(asset.value),
    0
  );
  const sumOfLiabilityValues = yourLiabilities.reduce(
    (total, liability) => total + parseFloat(liability.value),
    0
  );
  // sending props to parent aka Main.js
  useEffect(() => {
    props.gettingSumValue(
      sumOfAssetValues,
      sumOfLiabilityValues,
      "hi from child"
    );
    props.gettingSumValue(
      sumOfAssetValues,
      sumOfLiabilityValues,
      "hi from child"
    );
  }, [sumOfAssetValues, sumOfLiabilityValues]);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{ backgroundColor: "#011c46", color: "white", fontWeight: "bold" }}
      >
        {props.title}
      </AccordionSummary>
      <AccordionDetails>
        {props.title === "Total Assets"
          ? yourAssets.map((data, index) => (
              <Box key={index}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    {data.inputTitle}
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Amount"
                    value={data.value}
                    onChange={data.onChange}
                  />
                </FormControl>
                <Slider
                  defaultValue={data.value}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  onChange={data.onChange}
                />
              </Box>
            ))
          : yourLiabilities.map((data, index) => (
              <Box key={index}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    {data.inputTitle}
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Amount"
                    value={data.value}
                    onChange={data.onChange}
                  />
                </FormControl>
                <Slider
                  defaultValue={10}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  onChange={data.onChange}
                />
              </Box>
            ))}
      </AccordionDetails>
    </Accordion>
  );
}
