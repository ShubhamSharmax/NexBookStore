import React from 'react'

const UserProfile = ({ user, handleLogOut }) => {
    const userData = user ? user.user : null;
    return (
        <div className='w-[90%] m-auto'>
            <h2 className="text-2xl font-bold my-4 text-center text-slate-800">User Profile</h2>
            <h1 className="text-slate-600 text-sm">Name : </h1>
            <h1 className="block mb-5 font-bold text-lg text-slate-900">{userData.fullname}</h1>
            <h1 className="text-slate-600 text-sm">Email : </h1>
            <h1 className="block mb-5 font-bold text-lg text-slate-900">{userData.email}</h1>
            <div className='text-end text-sm mt-4'>
                <button onClick={handleLogOut} className="text-red-700 underline font-bold text-lg hover:text-red-400">Logout</button>
            </div>
        </div>
    )
}

export default UserProfile