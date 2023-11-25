import { MouseEventHandler } from 'react'

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  text: string
  style?: any
  disabled?: boolean
}

const ButtonPrimary: React.FC<Props> = ({ onClick, text, style = {}, disabled = false }) => (
  <button
    disabled={disabled}
    type="submit"
    className="cofp-btn cofp-btn-primary"
    onClick={onClick || (() => {})}
    style={style}
  >
    {text}
  </button>
)

export default ButtonPrimary
