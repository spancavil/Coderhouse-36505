const batch = writeBatch(db)//ver en qué level colocarlo

const outOfStock = []

cart.forEach((prod) => {
    getDoc(doc(db, 'products', prod.id)).then((documentSnapshot) => {
        if (documentSnapshot.data().stock >= prod.quantity) {
            batch.update(doc(db, 'products', documentSnapshot.id), {
                stock: documentSnapshot.data().stock - prod.quantity
            })
        } else {
            outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
        }
    })
})

console.log(batch);

if (outOfStock.length === 0) {
    addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
        batch.commit().then(() => {
            setOrderId(id)
            console.log(id)
        })
    }).catch((err) => {
        console.log(`Error: ${err}`)
    })
}