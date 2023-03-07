import React, { useState } from 'react'
import { products } from '../data/products';

function ProductsTable() {

    const [productList, setproductList] = useState(products);
    const [isAsc, setisAsc] = useState(true);

    const sortById = () => {
        if(isAsc){
            let sortedProducts = productList.sort((a,b) => a.id - b.id);
            setproductList([...sortedProducts]);
            setisAsc(!isAsc);
        }else{
            let sortedProducts = productList.sort((a,b) => b.id - a.id);
            setproductList([...sortedProducts]);
            setisAsc(!isAsc);;
        }
    }

    return (<>
        <h1>Products Length: {productList.length}</h1>
        <table className='w3-table-all w3-hoverable'>
            <thead>
                <tr>
                    <th style={{cursor:"pointer", color:"red"}} onClick={() => sortById()}>Id</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Unit Price</th>
                    <th>Quantity Per Unit</th>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map(item => {
                        if(item.unitsInStock > 0) {
                            return <tr style={{backgroundColor: item.unitsInStock > 20 ? 'red' : null }} key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.quantityPerUnit}</td>
                        </tr>
                        }
                    })
                }
            </tbody>
        </table>
        <button style={{marginTop:"10px", color:"red"}} onClick={() => setproductList([])}>Delete All</button>
    </>)
}

export default ProductsTable