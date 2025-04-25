import { useContext } from "react";
import Menus from "./Menus";
import Table from "./Table"
import InvoiceRow from "./InvoiceRow";
import { AppContext } from "../App";

export default function InvoiceTable() {
    const {invoice, setInvoice, language} = useContext(AppContext)

    const handleDeleteInvoice = (order_no) => {
        setInvoice((invoice) => invoice.filter((invoice) => invoice.order_no !== order_no))
    }

    const handleDuplicateInvoice = (order_no) => {
        const selectedInvoice = invoice.find((inv) => inv.order_no === order_no);
        if (selectedInvoice) {
            // Generate a unique order number by appending a timestamp
            const timestamp = new Date().getTime();
            const duplicatedInvoice = { 
                ...selectedInvoice, 
                order_no: `${order_no}-copy-${timestamp}`,
                vat_id: `${selectedInvoice.vat_id}-copy-${timestamp}`
            };
            setInvoice((prevInvoices) => [...prevInvoices, duplicatedInvoice]);
        }
    }

    const englishHeaders = [
        "VAT ID",
        "Order No.",
        "Contractor",
        "Order Date",
        "Acceptance Date",
    ];

    const germanHeaders = [
        "USt-IdNr.",
        "Auftragsnummer",
        "Auftragnehmer",
        "Auftragsdatum",
        "Abnahmedatum",
    ];

    const headers = language === "english" ? englishHeaders : germanHeaders;

    return (
        <Menus>
            <Table columns="1fr 1fr 1fr 1fr 1fr 1fr">
                <Table.Header>
                    {headers.map((header, index) => (
                        <div key={index}>{header}</div>
                    ))}
                </Table.Header>

                <Table.Body data={invoice} render={(invoice) => {return <InvoiceRow invoice={invoice} handleDeleteInvoice={handleDeleteInvoice} handleDuplicateInvoice={handleDuplicateInvoice} key={ invoice.order_no }/>}}/>
            </Table>
        </Menus>
    )
}
