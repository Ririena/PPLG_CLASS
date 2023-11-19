import React from 'react'

export default function Login() {
  return (
    <>
<div class="border-2 border-violet-300 w-96 rounded-lg max-w-full mx-auto">
        <h1 className="font-bold text-4xl text-center mt-1 mb-2">Login</h1>
        <hr/>
        <hr className=''/>
        <a className="m-5 text-slate-300 hover:text-sky-700" href="">*Belum punya akun?</a>
        <div className=''>

        <div className="bg-slate-200 rounded-md max-w-md text-slate-400 mx-5 my-2 text-justify">
            <h1 className='ml-4'>USERNAME</h1>
        </div>
        <div className="bg-slate-200 rounded-md max-w-md text-slate-400 mx-5 my-2 text-justify">
            <h1 className='ml-4'>PASSWORD</h1>
        </div>
        </div>
        <div className="text-center">
        <button className="bg-violet-500 rounded-md text-white mx-5 my-2 w-2/3 hover:bg-violet-400 hover:text-violet-500">Login</button>
        </div>
    </div>
    </>
  )
}
