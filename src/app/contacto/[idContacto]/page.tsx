'use client'
import React from "react";
import Link from "next/link";

const ReactSignUpForm: React.FC = () => {
    type ErrorTypes = {
        isRepeatPasswordNotEqual?: boolean;
    };

    const [error, setError] = React.useState<ErrorTypes | null>(null);

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const payload = Object.fromEntries(formData.entries());

        console.log(payload);

        if (payload.password !== payload.repeatPassword) {
            setError({ isRepeatPasswordNotEqual: true });
            return;
        }
    };

    return (
        <form className="px-4 py-6 max-w-lg mx-auto my-6 bg-white rounded-lg shadow-md" onSubmit={handleSignUp}>
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input required type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">Surname</label>
                <input type="text" id="surname" name="surname" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input required type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                {error?.isRepeatPasswordNotEqual && <p className="text-red-500 mb-2">Password and Confirm Password don't match</p>}
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input required type="password" id="password" name="password" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Min 8 Characters" />
            </div>
            <div className="mb-4">
                <label htmlFor="repeatPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input required type="password" id="repeatPassword" name="repeatPassword" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex justify-center mb-4">
                <input type="submit" value="Register" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 cursor-pointer" />
            </div>
            <div className="flex justify-center">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 cursor-pointer">
                    <Link href="/">
                        <b>Go back</b>
                    </Link>
                </button>
            </div>
        </form>
    );
};

export default function Contacto() {
    return (
        <div className=" min-h-screen py-10">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
            <ReactSignUpForm />
        </div>
    );
}
