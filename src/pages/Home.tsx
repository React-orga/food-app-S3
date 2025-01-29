import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@api/ProductApi';
import { IProductApi } from '@types/ProductApi/ProductApiProps';
import ProductCard from '@components/molecules/ProductCard/ProductCard';

const Home = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ['Products'],
      queryFn: fetchProducts,
    });
  
    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>Error fetching data: {error.message}</p>;
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((product: IProductApi) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  };
  
  
  export default Home;
 