import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@api/ProductApi';
import { IProductApi } from '@types/ProductApi/ProductApiProps';

const Home = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ['Products'],
      queryFn: fetchProducts,
    });
  
    console.log("Fetched data:", data); // 🔍 Vérifie la structure
  
    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>Error fetching data: {error.message}</p>;
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array.isArray(data) ? data.map((product: IProductApi) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        )) : <p>No products available</p>}
      </div>
    );
  };
  
  export default Home;
 