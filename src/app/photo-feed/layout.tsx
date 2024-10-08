import React from "react";
import "./styles.css";

export default function Layout(props:{
    children: React.ReactNode;
    modal: React.ReactNode;
}){
    return (
        <>
        {props.modal}
        {props.children}
        </>
    )
}