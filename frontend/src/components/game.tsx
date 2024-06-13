import { useRecoilState } from "recoil"
import { choiceAtom } from "../atoms"

export const Game = ()=>{
    const [choice,setChoice] = useRecoilState(choiceAtom);
    console.log(choice)
    const arr : number[]= [0,1,2,3,4,5,6,7,8,9]
    return <div className="grid grid-cols-5 justify-center pt-10">
        <div></div>
        <div></div>
        <div className="grid grid-cols-5">
        {arr.map((num:number,)=>{return <button key={num}  className={`text-center border-2 m-1 w-14 h-14 font-bold border-white rounded-full ${num % 2=== 0 ? "bg-[#4040FF] text-white" : "bg-red-600 text-gray-800"} `} onClick={()=>{
            if(num %2 === 0){
                setChoice("blue")
            }else{
                setChoice("red")
            }
        }}>
            {num}
            </button>
        })}
        </div>      
    </div>
    
}