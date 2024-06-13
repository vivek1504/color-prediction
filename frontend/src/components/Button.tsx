import axios from "axios"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { balanceAtom, betAtom, choiceAtom, isExplodingAtom } from "../atoms"

export const Button = ()=>{
    const balance = useSetRecoilState(balanceAtom)
    console.log(betAtom)
    const setIsExploding = useSetRecoilState(isExplodingAtom)
    const bet = useRecoilValue(betAtom)
    const on = useRecoilValue(choiceAtom)
    const username = localStorage.getItem("username")
    return <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={async()=>{
            const response = await axios.post("http://localhost:3000/placebet",{bet,on,username})
            balance(parseInt(response.data.balance))
            console.log(response.data)
            setIsExploding(true)
            
        }}
    >Place Bet</button>
}