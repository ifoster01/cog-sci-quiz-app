"use client"
import { useState } from "react"
// store
import { useSessionStore } from "./AuthContext";
// components
import Slider from "./(components)/Slider"
import Dashboard from "./(components)/Dashboard"
import Quizzes from "./(components)/Quizzes"

export default function Authed() {
    const user = useSessionStore((state) => state.session);

    const [dashActive, setDashActive] = useState(true)

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-4">
                Welcome to the Cognitive Science Quiz App, {user.user_metadata.firstname}!
            </h1>
    
            <Slider props={{ dashActive, setDashActive }} />

            {dashActive ? (
                <Dashboard user={user} />
            ) : (
                <Quizzes user={user} />
            )}
        </div>
    )
}