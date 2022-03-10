import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MedDashboard } from "../pages/medsDashboard";
import { NavigationBar } from "../navigation";
import { BodyLayout } from "../layouts/body-layout";
export function RouterConfig() {
    return <Router>
        <Routes>
            <Route exact path="/" element={<BodyLayout><MedDashboard/></BodyLayout>}></Route>
        </Routes>
        <NavigationBar />
    </Router>
}