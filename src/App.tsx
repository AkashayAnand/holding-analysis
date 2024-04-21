import { useEffect, useState } from 'react'
import HoldingService from './service/holdings.service'
import { PayloadData } from './types/types';

function App() {
  const holdingService = new HoldingService();

  const [count, setCount] = useState<PayloadData[] | null>(null);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await holdingService.getHoldings()
      setCount(data);
    }
    fetchData();
  },[]);

  return (
    <>
      <h1>Hello</h1>
      {count && count[0].asset_class}
    </>
  );
};

export default App
