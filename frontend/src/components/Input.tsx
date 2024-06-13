import { useSetRecoilState } from "recoil"
import { betAtom } from "../atoms"

export const Input = ()=>{
  const setBet = useSetRecoilState(betAtom)
    return <div className="m-4 p-1 rounded-full max-w-sm bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
    <input className="p-3 w-full bg-slate-700 text-center text-extrabold text-white rounded-full focus:outline-none" type="number" id="name" placeholder="Amount" onChange={(e)=>{setBet(parseInt(e.target.value))}}></input>
  </div>

}