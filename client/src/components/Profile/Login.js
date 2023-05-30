import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GFLogo from '.././Images/GF Logo.png'

const Login = ({ setUser }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userLogin) => {
                    setUser(userLogin)
                    navigate('/profile')
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        });
    }

    const formErrorMsg = errors?.map((err) => (
        <li key={err} className="font-apercu text-md">{err}</li>
    ))

  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src={GFLogo} className="w-10 h-10 mx-auto rounded-full" alt="Glossier Fanatics Logo"/>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-font">Sign in to Glossier Fanatics</h2>
                <h3 className="text-md">Instantly create your profile and keep track of products you own or create a personal wishlist!</h3>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-500">Username</label>
                        </div>
                        <div className="mt-2">
                        <input type="text" autoComplete="email" required value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3" />
                        </div>

                    </div>
                    

                    <div>
                        <div className="flex items-center justify-between">
                            <label forhtml="password" className="block text-sm font-medium leading-6 text-gray-500">Password</label>
                            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-red-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
                <ul>{formErrorMsg}</ul>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Don't have an account?
                <a href="/signup" className="font-semibold leading-6 text-red-500 hover:text-red-400"> Sign up here!</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login