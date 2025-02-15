import { useRouter } from "next/router";

const DetailProduct = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID: {id}</p>
            <button onClick={() => router.back()}>Back</button>

            {/* Add a button to update the product */}
            <button onClick={() => router.push(`/update-product/${id}`)}>Update Product</button>

            {/* Add a button to delete the product */}
            <button onClick={() => router.push(`/delete-product/${id}`)}>Delete Product</button>

            {/* Add a button to view the reviews for this product */}
            <button onClick={() => router.push(`/reviews/${id}`)}>View Reviews</button>

            {/* Add a button to add a new review for this product */}
            <button onClick={() => router.push(`/add-review/${id}`)}>Add Review</button>

            {/* Add a button to view the related products */}
        </div>
    );
};

export default DetailProduct;