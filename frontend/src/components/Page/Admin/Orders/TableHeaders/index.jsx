import { TableHeaderStyled } from "../../ShowProduct/TableHeader.jsx/style";

export default function TableHeader() {
  const headers = [
    "id",
    "user",
    "email",
    "date",
    "status",
  ]
  return (
    <TableHeaderStyled>
      {headers.map((header) =>
        <th key={header}>{header.toUpperCase()}</th>  
      )}
    </TableHeaderStyled>
  );
}
