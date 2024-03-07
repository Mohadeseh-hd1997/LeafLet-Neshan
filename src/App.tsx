import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Main from "./Layout/Main";
import MapContainer from "./Components/Map/LeafLet/Neshan/MapContainer";
import { TravelDataProvider } from './Context/Path';
import DrawPath from "./Components/Map/LeafLet/Neshan/DrawPath";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ebf2f2",
          colorInfo: "#1d68d4",
          colorSuccess: "#3da30b",
          sizeStep: 4,
          colorLink: "#0752bf",
        },
      }}
    >
      <TravelDataProvider>
        <Main>
          <Routes>
            <Route path="/" element={<MapContainer />} />
            <Route path="/draw" element={<DrawPath />} />
          </Routes>
        </Main>
      </TravelDataProvider>
    </ConfigProvider>
  );
}

export default App;
