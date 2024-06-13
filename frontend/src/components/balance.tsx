import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms"

export const Balance = ()=>{
	const balance = useRecoilValue(balanceAtom)
    return <div>
	<div className="flex justify-center">
		<div className="flex justify-center m-2 p-1 rounded-full max-w-sm bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ">
			<div className="flex items-center p-2 h-12  bg-slate-800 rounded-full shadow-xs">
				<div className="p-2 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
				</div>
				<div className="text-lg pr-2 font-semibold text-center text-white">
						{balance}
				</div>
			</div>
		</div>
	</div>
</div>
}


