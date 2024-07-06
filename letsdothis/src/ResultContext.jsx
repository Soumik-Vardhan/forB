import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";

export const ResultObject = createContext();

export const ResultProvider = ({ children }) => {
  const [result, setResult] = useState(() => {
    const stordIsresult = localStorage.getItem("result");
    return stordIsresult ? JSON.parse(stordIsresult) : [];
  });
  const [resultObj, setResObj] = useState(() => {
    const stordIsresultObj = localStorage.getItem("resultObj");
    return stordIsresultObj ? JSON.parse(stordIsresultObj) : {};
  });
  useEffect(() => {
    localStorage.setItem("resultObj", JSON.stringify(resultObj));
  }, [resultObj]);

  useEffect(() => {
    localStorage.setItem("result", JSON.stringify(result));
  }, [result]);

  const updateResult = (newResult) => {
    setResult(newResult);
    setResObj(newResult);
  };

  return (
    <ResultObject.Provider value={{ result, updateResult, resultObj }}>
      {children}
    </ResultObject.Provider>
  );
};

// export const useResult = () => useContext(ResultObject);
