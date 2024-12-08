
import { Box, Typography, Button } from "@mui/material";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";

interface IAppProps{}

const App: React.FC<IAppProps> = () => {
  return (
    <Box >
      <Routes>
        <Route path='/' element={<Layout />}/>
      </Routes>
    </Box>
  );
};

export default App;
