import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import TableHeader from './tableHeader';

export default function Table({
  showHeaderInput = true,
  showHeader = true,
  openModal,
  items,
  cols,
  rows,
}) {
  return (
    <>
      {showHeader && <TableHeader openModal={openModal} />}
      <CTable
        responsive="md"
        bordered
        tableProps={{
          hover: true,
        }}
      >
        <CTableHead style={{}}>
          {showHeaderInput && (
            <CTableRow>
              {cols.map((col) => (
                <CTableHeaderCell
                  style={{
                    backgroundColor: '#f6f4f7',
                    border: '1px solid #dadbdc',
                    textAlign: 'center',
                    padding: '0px',
                  }}
                  scope="col"
                >
                  <input></input>
                </CTableHeaderCell>
              ))}
            </CTableRow>
          )}
          <CTableRow>
            {cols.map((col) => (
              <CTableHeaderCell
                style={{
                  height: '40px',
                  backgroundColor: '#f6f4f7',
                  border: '1px solid #dadbdc',
                  fontWeight: '700',
                  fontSize: '17px',
                }}
                scope="col"
              >
                {col}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {items.map((data) => (
            <CTableRow key={data.id}>
              {rows.map((row) => (
                <CTableDataCell
                  style={{ maxWidth: '300px', minWidth: '150px', height: '40px' }}
                  key={`${data.id}-${row}`}
                >
                  {data[row]}
                </CTableDataCell>
              ))}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  );
}
