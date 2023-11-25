import { MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
  text: string
}

const ButtonSecondary: React.FC<Props> = ({ onClick, text }) => (
  <button type="submit" className="cofp-btn cofp-btn-secondary" onClick={onClick}>
    {text}
  </button>
)

export default ButtonSecondary
