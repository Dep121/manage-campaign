import React from 'react';
import s from './index.module.scss';

function Table({ columns, rows, id }) {
  return (<div className={s.table}>
    <table>
      <thead>
        <tr>
          {
            columns.map(colName => <th key={id + colName}>{colName}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row, i) => {
            return (
              <>
                <tr key={id + i}>
                  {
                    row.map((cell, j) => {
                      return (
                        <td key={id + j}>
                          {cell}
                        </td>
                      )
                    })
                  }
                </tr>
                <tr key={id + i + "sepa"} className={s.separator}></tr>
              </>
            )
          })
        }
      </tbody>
    </table>
  </div>
  )
}

export default Table;
