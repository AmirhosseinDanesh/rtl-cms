import { useEffect } from 'react'
import ReactDOM from 'react-dom'

import "./DeleteModal.css"
export default function DeleteModal({ cancel, submit }) {
    useEffect(() => {
        const escape = (e) => {
            if (e.keyCode === 27) {
                cancel()
            }
        }
        window.addEventListener("keydown", escape)
        return () => {
            window.removeEventListener("keydown", escape)

        }
    })
    
    return ReactDOM.createPortal(
        <div className="modal show fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">آیا از حذف اطمینان دارید؟</h5>
                        <button type="button" className="close btn" aria-label="Close">
                            <span className='close-modal' aria-hidden="true" onClick={() => cancel()}>&times;</span>
                        </button>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => submit()}>بله</button>
                        <button type="button" className="btn btn-secondary" onClick={() => cancel()}>خیر</button>
                    </div>
                </div>
            </div>
        </div>
        , document.querySelector("#modal-parent")
    )
}