import { useRef, useCallback } from 'react'

const FocusInput = () => {

    const inputEl = useRef<HTMLInputElement>(null)

    const focusInput = useCallback(() => {
        console.log(inputEl)
        inputEl.current?.focus()
    }, [inputEl])

    return (
        <>
            <input ref={inputEl} />
            <button onClick={focusInput}>聚焦</button>
        </>
    )

}

export default FocusInput