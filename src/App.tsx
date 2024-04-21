import { useEffect, useState } from 'react'
import HoldingService from './service/holdings.service'
import { PayloadData } from './types/types';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function App() {

  const holdingService = new HoldingService();
  const [holdingData, setHoldingData] = useState<PayloadData[] | null>(null);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await holdingService.getHoldings()
      setHoldingData(data);
    }
    fetchData();
  },[]);

  return (
<>
      <Container>
        <Typography variant="h4" gutterBottom>
          Holdings
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Ticker</TableCell>
                <TableCell align="right">Asset Class</TableCell>
                <TableCell align="right">Average Price</TableCell>
                <TableCell align="right">Market Price</TableCell>
                <TableCell align="right">Market Value in CCY</TableCell>
                <TableCell align="right">Latest Change (%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {holdingData && holdingData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.ticker}</TableCell>
                  <TableCell align="right">{row.asset_class}</TableCell>
                  <TableCell align="right">{row.avg_price?.toFixed(2)}</TableCell>
                  <TableCell align="right">{row.market_price?.toFixed(2)}</TableCell>
                  <TableCell align="right">{row.market_value_ccy.toFixed(2)}</TableCell>
                  <TableCell align="right">{row.latest_chg_pct.toFixed(2)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default App
