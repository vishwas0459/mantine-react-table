import React, { FC } from 'react';
import { TableContainerProps, TableProps } from '@mui/material';
import { Column } from 'react-table';
import { ReactTableMuiProvider } from './useReactTableMui';
import { RTM_TableContainer } from './RTM_TableContainer';

export interface ReactTableMuiOptionsProps {
  tableProps?: TableProps;
  tableContainerProps?: TableContainerProps;
}

export interface ReactTableMuiProps extends ReactTableMuiOptionsProps {
  columns: Column[];
  data: any[];
}

export const ReactTableMui: FC<ReactTableMuiProps> = (props) => {
  return (
    <ReactTableMuiProvider {...props}>
      <RTM_TableContainer />
    </ReactTableMuiProvider>
  );
};