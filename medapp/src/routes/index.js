import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MedDashboard } from "../pages/medsDashboard";
import { NavigationBar } from "../navigation";
import { BodyLayout } from "../layouts/body-layout";
import {PageNotFound} from '../pages/404page'

export function RouterConfig() {
    return <Router>
        <Routes>
            <Route exact path="/" element={<BodyLayout><MedDashboard/></BodyLayout>}></Route>
            <Route exact path="/404" element={<BodyLayout><PageNotFound/></BodyLayout>}></Route>
        </Routes>
        <NavigationBar />
    </Router>
}