import './App.css'
import gantel1 from './assets/imgs/gantel1.png'
import gantel2 from './assets/imgs/gantel2.png'
import cat from './assets/imgs/cat.png'
import base from './assets/imgs/base.png'
import deam from './assets/imgs/beam.png'
import panse_left from './assets/imgs/pans_left.png'
import panse_rigth from './assets/imgs/pans_right.png'
import holder_right from './assets/imgs/holder_right.png'
import holder_left from './assets/imgs/holder_left.png'
import { FormEvent, useState } from 'react'
import Modal from './Modal/Modal'

function App() {
  const [input, setInput] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsOpen(true)
  }

  let modalContent = null

  if (Number(input) === 1) {
    modalContent = (
      <div className='modal'>
        <h1>Дааа, получился 👏</h1>
        <h3>Давай бегом к следующему игру ✅</h3>
        <button
          className='btn'
          onClick={() => {
            setIsOpen(false)
            setInput('')
          }}
        >
          продолжить
        </button>
      </div>
    )
  } else {
    modalContent = (
      <div className='modal'>
        <h1>Оййй, подумайка ещё раз 😉</h1>
        <button
          className='btn'
          onClick={() => {
            setIsOpen(false)
            setInput('')
          }}
        >
          продолжить
        </button>
      </div>
    )
  }

  return (
    <div>
      <h2>
        Эгер мый-мый турган жактагы табакчасына <br /> 5кг салмак кошсо, тараза
        тен салмакта болот. Ошондо мышык канча кг?
      </h2>
      <section className='app'>
        <img className='base' src={base} alt='base' />

        <img className='deam' src={deam} alt='deam' />

        <div className='holders'>
          <img src={holder_left} alt='holder_left' />
          <img src={holder_right} alt='holder_right' />
        </div>

        <div className='flex'>
          <div className='left_bloc'>
            <img className='panse_left' src={panse_left} alt='panse_left' />

            <div>
              <img
                className='dumbbell_left'
                src={gantel2}
                alt='dumbbell_left'
              />
              <img className='cat' src={cat} alt='' />
            </div>
          </div>

          <div className='rigth_bloc'>
            <img className='panse_rigth' src={panse_rigth} alt='' />
            <img className='dumbbell_rigth' src={gantel1} alt='' />
          </div>
        </div>
      </section>

      <form onSubmit={submitHandler} className='imput_block'>
        <h3>Ответ: </h3>
        <input
          value={input}
          type='number'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Введите'
        />
        <button type='submit' className='btn'>
          Проверить
        </button>
      </form>

      <Modal isOpen={isOpen}>{modalContent}</Modal>
    </div>
  )
}

export default App
