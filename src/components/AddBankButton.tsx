import React, { memo } from 'react'

export type AddBankButtonProps = {
  onClick: () => void
}

const AddBankButton = ({ onClick }: AddBankButtonProps): JSX.Element => {
  return (
    <button className="btn btn-primary btn-sm" onClick={onClick}>
      追加
    </button>
  )
}

export default memo(AddBankButton)
