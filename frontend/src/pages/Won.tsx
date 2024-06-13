import { useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useRecoilState } from 'recoil';
import { isExplodingAtom } from '../atoms';

export const Won = () => {
  const [isExploding, setIsExploding] = useRecoilState(isExplodingAtom);
  useEffect(()=>{
    if(isExploding){
      setTimeout(() => setIsExploding(false), 2000);
    }
  }, [isExploding])
    return <div className='flex justify-center'>
      {isExploding && <ConfettiExplosion />}
    </div>
}