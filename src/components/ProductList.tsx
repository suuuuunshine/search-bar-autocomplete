type Product = {
  id: number;
  title: string;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="bg-white max-h-80 overflow-y-scroll rounded shadow mt-1 w-full">
      {products.map((product) => (
        <div
          className="flex px-4 py-1 justify-between border-b"
          key={product.id}
        >
          <p>{product.title}</p>
          <img src={product.image} alt="" className="h-5 ms-2" />
        </div>
      ))}
    </div>
  );
}
