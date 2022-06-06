import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// add more options if needed
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

export * from "@testing-library/react"
export { customRender as Render }