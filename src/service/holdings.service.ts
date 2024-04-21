import { PayloadData } from "../types/types";

export default class HoldingService {
  getHoldings = async (): Promise<PayloadData[] | null> => {
    try {
      const response = await fetch('https://canopy-frontend-task.vercel.app/api/holdings');
      const data = await response.json();
      return data.payload;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    return null;
  }
}

