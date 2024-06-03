import SearchInput from '../../src/components/SearchInput.vue'

describe('<SearchInput />', () => {
  it('should render input', () => {
    cy.mount(SearchInput)
    cy.get('input.search').should('be.visible')
  })

  it('should update value on input', () => {
    cy.mount(SearchInput)
    cy.get('input.search').type('test')
    cy.get('input.search').should('have.value', 'test')
  })
})
