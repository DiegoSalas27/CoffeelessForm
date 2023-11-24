import { useState } from 'react'
import { AuxProps } from '../../ts/interfaces'
import { useCoffeelessHandler } from '../../validator'

type Props = {
  preValidate?: () => boolean
  handleSubmit: () => void
  handleCancel: (e: React.FormEvent<HTMLButtonElement>) => void
  changeTab?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, tab: string) => void
  submitText?: string
  tabs?: string[]
  selectedTab?: string
}

const Form: React.FC<Props & AuxProps> = ({
  children,
  preValidate,
  handleSubmit,
  handleCancel,
  submitText,
  changeTab,
  tabs = [],
  selectedTab
}) => {
  const [invalidForm, setInvalidForm] = useState(false)
  const { validateFormOnSubmit } = useCoffeelessHandler()

  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    let isFormInValid = false

    if (preValidate) {
      isFormInValid = preValidate()
    }

    if (isFormInValid) {
      validateFormOnSubmit('')
    } else {
      isFormInValid = validateFormOnSubmit('')
    }

    if (!isFormInValid) {
      handleSubmit()
    } else {
      setInvalidForm(true)
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      {tabs.length ? (
        <>
          <ul className="nav nav-tabs">
            {tabs.map((tab, i) => (
              <li key={tab} className="nav-item">
                <a
                  onClick={e => { changeTab!(e, tab); }}
                  className={`nav-link ${selectedTab === tab && 'active'}`}
                  style={{ cursor: 'pointer' }}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content" style={{ display: 'contents' }}>
            <div className="row">{children}</div>
          </div>
        </>
      ) : (
        <div className="row">{children}</div>
      )}

      {/* consider deleting this message when there are no more errors */}
      {invalidForm && <p className="ml-1 field-error">Please fix the errors in the fields above</p>}
      <div className="form-footer">
        <button
          type="submit"
          className="btn btn-primary"
        >
          { submitText || 'Submit' }
        </button>

        <button onClick={handleCancel} className="btn btn-light">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Form
