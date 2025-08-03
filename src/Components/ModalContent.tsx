import React from 'react'

interface Props {
  isBalanced: boolean
  setIsOpen: (value: boolean) => void
  setCatWeight: (value: string) => void
}

export function ModalContent({ isBalanced, setIsOpen, setCatWeight }: Props) {
  return (
    <div className='modal'>
      {isBalanced ? (
        <>
          <h1>Дааа, получился 👏</h1>
          <h3>Давай бегом к следующему игру✅</h3>
        </>
      ) : (
        <h1>Попробуй сбалансировать весы сначала 😉</h1>
      )}
      <button
        className='btn'
        onClick={() => {
          setIsOpen(false)
          setCatWeight('')
        }}
      >
        продолжить
      </button>
    </div>
  )
}
