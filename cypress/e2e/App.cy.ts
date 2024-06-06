describe('App.vue', () => {
    it('should render HomePage at /home', () => {
        cy.visit('/home')
        cy.get('[data-testid="home-header"]').should('be.visible')
    })

    it('should render MoviePage at /movie/:id', () => {
        cy.visit('/movie/1')
        cy.get('[data-testid="movie-header"]').should('be.visible')
    })

    it('should redirect from / to /home', () => {
        cy.visit('/')
        cy.location('pathname').should('eq', '/home')
        cy.get('[data-testid="home-header"]').should('be.visible')
    })

    it('should find the movie via the search', () => {
        cy.visit('/home')
        cy.get('[data-testid="home-header"]').should('be.visible')

        cy.get('[data-testid="search-input"]').type('God')
        cy.get('[data-testid="search-button"]').click()

        cy.contains('1 movie found')
    })
})