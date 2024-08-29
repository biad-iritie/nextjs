export default function Detail({params}:{
    params: {productId: string}
}){
    return <h1>Product {params.productId}</h1>
}