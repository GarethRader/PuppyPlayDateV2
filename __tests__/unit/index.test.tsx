// import { render, screen } from '@testing-library/react'
import { render } from '../utils/test-utils'
import Home from '../../pages/index'

describe('Home', () => {
    it('renders home page', () => {
        render(<Home />)
    })
})
