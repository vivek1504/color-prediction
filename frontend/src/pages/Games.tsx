import { Balance } from "../components/balance"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Game } from "../components/game"

export const Games = ()=>{
    return <><div className='flex justify-center pt-5'>
      <Balance></Balance>
    </div><Game></Game><div className='flex justify-center pt-11 mt-11'>
        <Input></Input>
      </div><div className='flex justify-center pt-1'>
        <Button></Button>
      </div></>
}