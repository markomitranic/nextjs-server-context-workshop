import { Table } from "./Table";
import { TableContextWrapper } from "./TableContextWrapper";

export function HeaderComponent() {
    return <div style={{border: "1px solid teal"}}>
        <p>Header is server rendered.</p>
        <TableContextWrapper/>
    </div>;
}