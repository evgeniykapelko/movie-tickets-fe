import { forwardRef } from "react"

const TextArea = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <textarea
                className="form-control"
                id={props.name}
                ref={ref}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
})

export default TextArea;