import { useRef } from "react/cjs/react.production.min"

export function Toast({children}){
    return <span className="toast">
            {children}
        </span>
}
