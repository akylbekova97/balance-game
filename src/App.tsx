import './App.css'
import base from './assets/imgs/base.png'
import deam from './assets/imgs/beam.png'
import holder_right from './assets/imgs/holder_right.png'
import holder_left from './assets/imgs/holder_left.png'
import { FormEvent, useState } from 'react'
import Modal from './Components/Modal/Modal'
import { FormComponents } from './Components/FormComponent'
import { ModalContent } from './Components/ModalContent'
import { LeftBloc } from './Components/LeftBloc'
import { RigthBloc } from './Components/RigthBloc'

const leftWeight = 12
const rightWeight = 18
const valueNum = 5

function App() {
  const [catWeight, setCatWeight] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsOpen(true)
  }

  const isBalanced = leftWeight + Number(catWeight) === rightWeight

  return (
    <div>
      <h2>
        Эгер мый-мый турган жактагы табакчасына <br /> {valueNum}кг салмак
        кошсо, тараза тен салмакта болот. Ошондо мышык канча кг?
      </h2>

      <h4>{`${valueNum}`} + Мышыктын салмагын тапсан тараза тен болот</h4>

      <section className='app'>
        <img className='base' src={base} alt='base' />

        <img className='deam' src={deam} alt='deam' />

        <div className='holders'>
          <img src={holder_left} alt='holder_left' />
          <img src={holder_right} alt='holder_right' />
        </div>

        <div className='flex'>
          <LeftBloc isBalanced={isBalanced} />

          <RigthBloc isBalanced={isBalanced} />
        </div>
      </section>

      <FormComponents
        submitHandler={submitHandler}
        setCatWeight={setCatWeight}
        catWeight={catWeight}
      />

      <Modal isOpen={isOpen}>
        <ModalContent
          isBalanced={isBalanced}
          setIsOpen={setIsOpen}
          setCatWeight={setCatWeight}
        />
      </Modal>
    </div>
  )
}

export default App
