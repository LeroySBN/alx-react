import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const tableHeaderStyle = {
    backgroundColor: "#deb5b545",
  };
  const tableRowStyle = {
    backgroundColor: "#f5f5f5ab",
  };
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={tableHeaderStyle}>{textFirstCell}</th>
            <th style={tableHeaderStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td style={tableRowStyle}>{textFirstCell}</td>
          <td style={tableRowStyle}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}
