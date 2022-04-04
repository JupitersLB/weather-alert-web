import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

export const JLBModal: FC<{
  showModal: boolean
  title: string
  setShowModal: (isVisible: boolean) => void
}> = observer(({ showModal, setShowModal, title, children }) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="flex justify-center backdrop-blur bg-jlb-modal items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-auto my-6 mx-auto max-w-3xl"
            >
              <div className="border-0 z-50 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-md">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300">
                  <h3 className="text-3xl w-full text-center font=semibold">
                    {title}
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {children}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
})
