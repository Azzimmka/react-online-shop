import { useContext } from 'react'
import { Context } from '../App'


export default function Card(){
    const context = useContext(Context)
    if (!context) return null; 
    const { state, dispatch} = context

    const { products } = state

    if (state.loading) return <div>Загрузка...</div>;  // ← вместо products.length
    if (products.length === 0) return <div>Нет товаров</div>;
    return (

        <div className="flex flex-row w-325 m-auto mt-12.5">
            {products.map(product => (
                <div key={product.id} className="flex flex-col p-3 gap-4 items-center w-87.5 border border-gray-400 rounded-2xl">
                    <img src={product.image} alt={product.title} />

                    <div>
                        <p>{product.title}</p>
                        <p>Price: ${product.price}</p>
                    </div>


                    <button onClick={() => dispatch({ type: 'TOGGLE_LIKE', payload: { productId: product.id }})} className="bg-gray-400 text-white p-3 rounded-40px cursor-pointer">❤️ {state.likedIds.includes(product.id) ? 'Liked' : 'Like'}</button>
                    <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id } })} className="bg-gray-400 text-white p-3 rounded-40px cursor-pointer">🛒 Add to cart</button>
                </div>
                
            ))}
        </div>
    )
}