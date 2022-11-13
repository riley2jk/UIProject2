import React from "react";
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
import CompGraph from "./components/Courses/ComputerGraphics";
import SenDes from "./components/Courses/SeniorDesign";
import UserInt from "./components/Courses/UserInterface";
import CGAssign from "./components/Courses/ComputerGraphics/CGAssign";
import CGAnn from "./components/Courses/ComputerGraphics/CGAnn";
import CGGrades from "./components/Courses/ComputerGraphics/CGGrades";
import CGSyll from "./components/Courses/ComputerGraphics/CGSyll";
import CGPages from "./components/Courses/ComputerGraphics/CGPages";
import CGFiles from "./components/Courses/ComputerGraphics/CGFiles";
import CGZoom from "./components/Courses/ComputerGraphics/CGZoom";
import CGEcho from "./components/Courses/ComputerGraphics/CGEcho";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="courses">
                        <Route index element={<Courses />} />
                        <Route path="computer_graphics" element={<CompGraph />}>
                            <Route path="assignments" element={<CGAssign />} />
                            <Route path="announcements" element={<CGAnn />} />
                            <Route path="grades" element={<CGGrades />} />
                            <Route path="syllabus" element={<CGSyll />} />
                            <Route path="pages" element={<CGPages />} />
                            <Route path="files" element={<CGFiles />} />
                            <Route path="zoom" element={<CGZoom />} />
                            <Route path="echo360" element={<CGEcho />} />
                        </Route>
                        <Route path="senior_design" element={<SenDes />} />
                        <Route path="ui" element={<UserInt />} />
                    </Route>
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
