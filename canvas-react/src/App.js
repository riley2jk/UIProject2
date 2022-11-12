import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Courses from "./components/Courses";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Groups from "./components/Groups";
import Inbox from "./components/Inbox";
import Account from "./components/Account";
import Help from "./components/Help";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="groups" element={<Groups />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="account" element={<Account />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
