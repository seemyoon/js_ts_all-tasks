const carts = fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(res => res)

const resolvedPromiseFunc = async (carts) => {
    const res = await carts
    const promises = res.carts.map(cart => {
        return new Promise(resolve => {
            cart.products.forEach(product => {
                resolve(
                    {
                        cart_id: cart.id,
                        title: product.title,
                        price: product.price,
                        quantity: product.quantity,
                        total: product.total,
                        discountPercentage: product.discountPercentage,
                        discountedTotal: product.discountedTotal,
                        thumbnail: product.thumbnail

                    })
            })

        })
    })
    return Promise.all(promises)
}
resolvedPromiseFunc(carts).then(res => console.log(res))
