test('check email validation',()=>{
    const email = "add@mail.com"
    expect(email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)  
})

test('check product test', ()=>{
    const product = {
        name: 'Atlas Dunia',
        image_url: undefined,
        price: 1000,
        stock: 3
    }

    expect(product).toEqual(
        expect.objectContaining({
            name: expect.any(String),
            price: expect.any(Number),
            stock: expect.any(Number)
        })
    )

    expect(product.name).toBeTruthy()
    expect(product.price).toBeGreaterThanOrEqual(0)
    expect(product.stock).toBeGreaterThanOrEqual(0)
})