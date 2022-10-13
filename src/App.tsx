import './App.css';
import { ProductButtons, ProductCard, ProductTitle, ProductImage } from 'jtu-product-card';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
}

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={product}
        initialValues={{
          count: 5,
          maxCount: 10,
        }}
      >
        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
              <>
                <ProductImage />
                <ProductTitle  />
                <ProductButtons  />
              </>
          )
        }
      </ProductCard>
    </div>
  );
}

export default App;
