import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const App = () => {
    return (
        <DndProvider backend={Backend}>
            <Header />
            <Homepage />
        </DndProvider>
    );
};

export default App;