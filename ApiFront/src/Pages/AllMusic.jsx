import  React from "react";
import Music from "../components/Music";
import FormAdd from "../components/FormAdd";
import NavBar from "../components/NavBar";




export const AllMusic = () => {

    return (
        <>
        <header>
            <NavBar />
        </header>
        <FormAdd />
        <h2>Tabla de artistas y bandas</h2>
        <Music />
        </>
    ) 
}