export default function Detail({params}:{
    params: {productId: string, reviewId:string}
}){
    return <h1>Product {params.productId} Review {params.reviewId}</h1>
}