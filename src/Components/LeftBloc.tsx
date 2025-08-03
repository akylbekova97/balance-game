import dumbbell_left from '../assets/imgs/gantel2.png'
import cat from '../assets/imgs/cat.png'
import panse_left from '../assets/imgs/pans_left.png'

interface Props {
  isBalanced: boolean
}

export function LeftBloc({ isBalanced }: Props) {
  return (
    <div
      className='left_bloc'
      style={{
        transition: 'transform 0.5s ease',
        transform: `translateY(${isBalanced ? -145 : -160}px)`,
      }}
    >
      <img className='panse_left' src={panse_left} alt='panse_left' />

      <div>
        <img
          className='dumbbell_left'
          src={dumbbell_left}
          alt='dumbbell_left'
        />
        <img className='cat' src={cat} alt='cat' />
      </div>
    </div>
  )
}
