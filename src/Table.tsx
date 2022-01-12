import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'name' | 'symbol' | 'unicode' | 'entity' | 'html' | 'block';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'symbol', label: 'Symbol', minWidth: 100 },
  {
    id: 'unicode',
    label: 'Unicode',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'entity',
    label: 'Entity',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'html',
    label: 'HTML',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'block',
    label: 'Block',
    minWidth: 170,
    align: 'right',
  },
];

interface Data {
  name: string;
  symbol: string;
  unicode: string;
  entity: string;
  html: string;
  block: string;
}

function createData(
  name: string,
  symbol: string,
  unicode: string,
  entity: string,
  html: string,
  block: string,
): Data {
  return { name, symbol, unicode, entity, html, block };
}

const rows = [
  createData('Dollar Sign', '$', 'U+0024', '&dollar;', '&#36;', 'Currency Symbols'),
  createData('Bitcoin Sign', '₿', 'U+20BF', '', '&#8383;', 'Currency Symbols'),
  createData('Won Sign', '₩', 'U+20A9', '', '&#8361;', 'Currency Symbols'),
  createData('Yen Sign', '¥', 'U+00A5', '&yen;', '&#165;', 'Latin-1 Supplement'),
  createData('Currency Sign', '¤', 'U+00A4', '&curren;', '&#164;', 'Latin-1 Supplement'),
  createData('Pound Sign', '£', 'U+00A3', '&pound;', '&#163;', 'Latin-1 Supplement'),
  createData('Cent Sign', '¢', 'U+00A2', '&cent;', '&#162;', 'Latin-1 Supplement'),
  createData('Script Capital H', 'ℋ', 'U+210B', '&hamilt;', '&#8459;', 'Letterlike Symbols'),
  createData('Black-Letter Capital I', 'ℑ', 'U+2111', '&image;', '&#8465;', 'Letterlike Symbols'),
  createData('Numero Sign', '№', 'U+2116', '&numero;', '&#8470;', 'Letterlike Symbols'),
  createData('Script Capital P', '℘', 'U+2118', '&weierp;', '&#8472;', 'Letterlike Symbols'),
  createData('Inverted Ohm Sign', '℧', 'U+2127', '&mho;', '&#8487;', 'Letterlike Symbols'),
  createData('Black-Letter Capital Z', 'ℨ', 'U+2128', '&Zfr;', '&#8488;', 'Letterlike Symbols'),
  createData('Gimel Symbol', 'ℷ', 'U+2137', '&gimel;', '&#8503;', 'Letterlike Symbols'),
  createData('Bet Symbol', 'ℶ', 'U+2136', '&beth;', '&#8502;', 'Letterlike Symbols'),
  createData('New Sheqel Sign', '₪', 'U+20AA', '', '&#8362;', 'Currency Symbols'),
  createData('Euro Sign', '€', 'U+20AC', '', '&#8364;', 'Currency Symbols'),
  createData('Tenge Sign', '₸', 'U+20B8', '', '&#8376;', 'Currency Symbols'),
  createData('French Franc Sign', '₣', 'U+20A3', '', '&#8355;', 'Currency Symbols'),
];

export const StickyHeadTable = () => {
  return (
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.symbol}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default StickyHeadTable;
