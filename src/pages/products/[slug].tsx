import { useRouter } from "next/router";

const Product = () => {
    const { query } = useRouter();
    console.log(query);
    return (
        <div>
            <h1>Product </h1>
            <p>Product ID: {}</p>
        </div>
    );
};

export default Product;