import dumbbell_rigth from '../assets/imgs/gantel1.png'
import panse_rigth from '../assets/imgs/pans_right.png'

interface Props {
  isBalanced: boolean
}

export function RigthBloc({ isBalanced }: Props) {
  return (
    <div
      className='rigth_bloc'
      style={{
        transition: 'transform 0.5s ease',
        transform: `translateY(${isBalanced ? -10 : 0}px)`,
      }}
    >
      <img className='panse_rigth' src={panse_rigth} alt='panse_rigth' />
      <img
        className='dumbbell_rigth'
        src={dumbbell_rigth}
        alt='dumbbell_rigth'
      />
    </div>
  )
}
