import { FormEvent } from "react"

interface Props {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void
  setCatWeight: (e: string) => void
  catWeight: string
}

export function FormComponents({
  submitHandler,
  catWeight,
  setCatWeight,
}: Props) {
  return (
    <form onSubmit={submitHandler} className='imput_block'>
      <h3>Ответ: </h3>
      <input
        value={catWeight}
        type='number'
        onChange={(e) => setCatWeight(e.target.value)}
        placeholder='Введите'
      />
      <button type='submit' className='btn'>
        Проверить
      </button>
    </form>
  )
}
