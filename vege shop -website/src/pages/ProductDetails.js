import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SHOP_DATA from '../shop.data'
import Loading from '../components/Loading'
import ProductDetailsComp from '../components/ProductDetailsComp'

const ProductDetails = (props) => {

    const [product, setProduct] = useState('')

    const getProduct = (data) => {
        if (props.match.params.id) {
            const res = data;
            const selectedData = res.filter(item => {
                return item.id === Number(props.match.params.id)
            })
            setProduct(selectedData)
        }
    }

    useEffect(() => {
        getProduct(SHOP_DATA)
    }, [])

    const [ds] = product

    return (
        <Com>
            {
                product ? <ProductDetailsComp image={ds.image} name={ds.name} category={ds.category} price={ds.price} dcp={ds.dcp} product={ds} /> : <Loading />
            }
        </Com>
    )
}

const Com = styled.div`
`;

export default ProductDetails
