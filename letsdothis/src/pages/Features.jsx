import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Results from "./Results";
import { Link as RouterLink } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, Tooltip, Typography, Paper } from "@mui/material";
import Link from "@mui/material/Link";
import Footer_2 from "../structure/Footer_2";
import Grid from "@mui/material/Grid";
import { useSearchParams } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ResultObject } from "../ResultContext";
// import { createContext, useContext } from "react";
import Navbar from "../structure/Navbar";
import in_progress from "../assets/In_progress.png";
import progress_overview from "../assets/progress_overview.svg";
// import { log } from "console";

const validationSchema = Yup.object().shape({
  assets: Yup.number()
    .required("Assets are required")
    .positive("assets must be positive"),
});

export default function Features() {
  const { result, updateResult, resultObj } = useContext(ResultObject);
  // const { result } = useContext(result);
  // const { result } = useContext(ResultProvider);
  const [ans, setAns] = useState();
  console.log("default new ans", ans);
  const [isForm, setIsForm] = useState({
    assets: 0,
    laibilities: 0,
    curr_assets: 0,
    curr_liab: 0,
    inventory: 0,
    total_debt: 0,
    total_equity: 0,
    net_income: 0,
    avg_assets: 0,
    avg_stakes: 0,
  });
  const [isHoveredAsset, setIsHoveredAsset] = useState(false);
  const [isHoveredLiab, setIsHoveredLiab] = useState(false);
  const [isHoveredCurrentAsset, setIsHoveredCurrentAsset] = useState(false);
  const [isHoveredCurrentLiab, setIsHoveredCurrentLiab] = useState(false);
  const [isHovered, setIsHovered] = useState({
    asset: false,
    liab: false,
    currentAsset: false,
    currentLiab: false,
    inventory: false,
    totalDebt: false,
    totalEquity: false,
    netIncome: false,
    averageAssets: false,
    averageStakeEquity: false,
  });

  const handleOnCal = ({}) => {
    const new_ans = [];
    console.log("default new_ans", new_ans);
    const netWorth = isForm.assets - isForm.laibilities;
    const currentRatio = isForm.curr_assets / isForm.curr_liab;
    const quickRatio =
      (isForm.curr_assets - isForm.inventory) / isForm.curr_liab;
    const debtEquity = isForm.total_debt / isForm.total_equity;
    const returnOnAsset = isForm.net_income / isForm.avg_assets;
    const returnOnEquity = isForm.net_income / isForm.avg_stakes;

    new_ans.push(
      netWorth,
      currentRatio,
      quickRatio,
      debtEquity,
      returnOnAsset,
      returnOnEquity
    );
    const calculatedValues = [
      netWorth,
      currentRatio,
      quickRatio,
      debtEquity,
      returnOnAsset,
      returnOnEquity,
    ];
    const calObj = {
      Networth: netWorth,
      CurrentRatio: currentRatio,
      QuickRatio: quickRatio,
      DebtEquity: debtEquity,
      ReturnOnAsset: returnOnAsset,
      ReturnOnEquity: returnOnEquity,
    };

    // setAns(new_ans);
    updateResult(new_ans);
    updateResult(calObj);

    // console.log("after updating the ans with setResult", result);
    console.log("it is array", new_ans);

    console.log("button is clicked ", netWorth);
  };

  return (
    <>
      <Navbar />
      <Box
        height="100vh"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginTop="3rem"
        gap={2}
        sx={{ backgroundColor: "	#b0b0b0" }}
        // sx={{
        //   backgroundImage: `url(${in_progress})`,
        // }}
      >
        <Box
          width="90%"
          display="flex"
          id="title"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
        >
          <Typography variant="h5" fontWeight={"bolder"}>
            Let's check the financial stabiliy of your firm
          </Typography>
        </Box>
        <Typography variant="p">
          please note that assets and liability will be calculated in the
          persepective of Organizations or firms
        </Typography>
        we r in features box
        {/* ///////for assets////// */}
        <Box display="flex" alignItems="center">
          <Typography
            variant="body1"
            component="div"
            mr={1}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                asset: true,
              }))
            }
            onBlur={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                asset: false,
              }))
            }
            // sx={{ paddingTop: "1rem" }}
          >
            Assets
          </Typography>
          <Tooltip
            title="here we display additonal info about assets"
            open={isHovered.asset}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  asset: true,
                }))
              }
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  asset: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>

          <TextField
            size="small"
            label="Total Assets"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                assets: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>

          {/* for liabilities */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            sx={{ marginLeft: 1.5 }}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                liab: true,
              }))
            }
            onBlur={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                liab: false,
              }))
            }
          >
            Liabilities
          </Typography>
          <Tooltip
            title="here we display additonal info about Liabilities"
            open={isHovered.liab}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  liab: true,
                }))
              }
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  liab: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Total Liabilities"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                laibilities: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>
        </Box>
        <Box display="flex" alignItems="center">
          {/* for current Assets */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                currentAsset: true,
              }))
            }
            onBlur={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                currentAsset: false,
              }))
            }

            // sx={{ paddingTop: "1rem" }}
          >
            Current Assets
          </Typography>
          <Tooltip
            title="here we display additonal info about Current assets"
            open={isHovered.currentAsset}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  currentAsset: true,
                }))
              }
              // onMouseEnter={() => setIsHoveredCurrentAsset(true)}
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  currentAsset: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Assets"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                curr_assets: e.target.value,
              }))
            }
            // onFocus={() => setIsHoveredCurrentAsset(true)}
            // onBlur={() => setIsHoveredCurrentAsset(false)}
            sx={{ marginLeft: -0.5 }}
          ></TextField>

          {/* for current  liabilities */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            sx={{ marginLeft: 1.5 }}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                currentLiab: true,
              }))
            }
            onBlur={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                currentLiab: false,
              }))
            }
          >
            Current Liabilities
          </Typography>
          <Tooltip
            title="here we display additonal info about Current Liabilities"
            open={isHovered.currentLiab}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  currentLiab: true,
                }))
              }
              // onMouseEnter={() => setIsHoveredCurrentAsset(true)}
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  currentLiab: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Liabilities"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                curr_liab: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>
        </Box>
        <Box display="flex" alignItems="center">
          {/* for Total Debt */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                totalDebt: true,
              }))
            }
            onBlur={() =>
              setIsHoveredCurrentAsset((prevState) => ({
                ...prevState,
                totalDebt: false,
              }))
            }
            // sx={{ paddingTop: "1rem" }}
          >
            Total Debt
          </Typography>
          <Tooltip
            title="here we display additonal info about Total Debt"
            open={isHovered.totalDebt}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  totalDebt: true,
                }))
              }
              // onMouseEnter={() => setIsHoveredCurrentAsset(true)}
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  totalDebt: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Total Debt"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                total_debt: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>

          {/* for Total equity */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            sx={{ marginLeft: 1.5 }}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                totalEquity: true,
              }))
            }
            onBlur={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                totalEquity: false,
              }))
            }
          >
            Total Equity
          </Typography>
          <Tooltip
            title="here we display additonal info about Total Equity"
            open={isHovered.totalEquity}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  totalEquity: true,
                }))
              }
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  totalEquity: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Total Equity"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                total_equity: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>
        </Box>
        <Box display="flex" alignItems="center">
          {/* for Net Income */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                netIncome: true,
              }))
            }
            onBlur={() =>
              setIsHoveredCurrentAsset((prevState) => ({
                ...prevState,
                netIncome: false,
              }))
            }
            // sx={{ paddingTop: "1rem" }}
          >
            Net Income
          </Typography>
          <Tooltip
            title="here we display additonal info about Return on Net Income"
            open={isHovered.netIncome}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  netIncome: true,
                }))
              }
              // onMouseEnter={() => setIsHoveredCurrentAsset(true)}
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  netIncome: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Return on Assets"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                net_income: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>

          {/* for Average Assets */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            sx={{ marginLeft: 1.5 }}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                averageAssets: true,
              }))
            }
            onBlur={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                averageAssets: false,
              }))
            }
          >
            Average Assets
          </Typography>
          <Tooltip
            title="here we display additonal info about Average Assets"
            open={isHovered.averageAssets}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  averageAssets: true,
                }))
              }
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  averageAssets: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Average of Total assets"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                avg_assets: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>
        </Box>
        <Box display="flex" alignItems="center">
          {/* //////////// for Average Stake Equity ////////////// */}
          <Typography
            variant="body1"
            component="div"
            mr={1}
            sx={{ marginLeft: 1.5 }}
            onFocus={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                averageStakeEquity: true,
              }))
            }
            onBlur={() =>
              setIsHovered((prevState) => ({
                ...prevState,
                averageStakeEquity: false,
              }))
            }
          >
            Average Stake's Equity
          </Typography>
          <Tooltip
            title="here we display additonal info about Average Stakeholder Equity "
            open={isHovered.averageStakeEquity}
            disableHoverListener
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              aria-label="info"
              onMouseEnter={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  averageStakeEquity: true,
                }))
              }
              onMouseLeave={() =>
                setIsHovered((prevState) => ({
                  ...prevState,
                  averageStakeEquity: false,
                }))
              }
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            label="Average Stakeholder Equity"
            variant="outlined"
            onChange={(e) =>
              setIsForm((prevState) => ({
                ...prevState,
                avg_stakes: e.target.value,
              }))
            }
            sx={{ marginLeft: -0.5 }}
          ></TextField>
        </Box>
        <Box>
          <Link component={RouterLink} to={"/results"} state={{ ans }}>
            <Button
              size="small"
              variant="contained"
              onClick={handleOnCal}
              color="secondary"
            >
              Calculate
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer_2 />
    </>
  );
}
