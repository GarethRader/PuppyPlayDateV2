// import { render, screen } from '@testing-library/react'
import { render, fireEvent } from '../utils/test-utils'
import Home from '../../pages/index'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
    })
})
