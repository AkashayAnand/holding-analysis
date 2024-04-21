
// available options for asset_class
export enum AssetClass {
  REALESTATE = 'Real Estate',
  CASH = 'Cash',
  BOND = 'Bond',
  EQUITY = 'Equity',
  FUND = 'Fund',
  LOAN = 'Loan',
}

export type PayloadData = {
  name: string;
  ticker: string;
  asset_class: AssetClass;
  avg_price?: number;
  market_price?: number;
  market_value_ccy: number;
  latest_chg_pct: number;
}
