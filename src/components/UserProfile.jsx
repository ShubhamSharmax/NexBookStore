import React from 'react'

const UserProfile = ({ user, handleLogOut}) => {
    const userData = user ? user.user : null;
    return (
        <div>
            <div className="py-5 w-full text-sm flex flex-col items-center justify-center">
                <h1 className="text-slate-600">Name : </h1>
                <h1 className="font-bold text-slate-900">{userData.fullname}</h1>
                <h1 className="text-slate-600 pt-4">Email :</h1>
                <h1 className="font-bold text-slate-900">{userData.email}</h1>
            </div>
            <button onClick={handleLogOut} className="text-red-700 underline font-bold px-5 hover:text-red-400">Logout</button>
        </div>
    )
}

export default UserProfile