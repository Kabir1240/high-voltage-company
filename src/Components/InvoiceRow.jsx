import styled from "styled-components";
import { HiPencil, HiTrash } from "react-icons/hi";
import { HiSquare2Stack } from "react-icons/hi2";
import ConfirmDelete from "./ConfirmDelete";
import Table from "./Table";
import Menus from "./Menus";
import Modal from "./Modal";
import EditInvoiceFormEnglish from "./EditInvoiceFormEnglish";
import EditInvoiceFormGerman from "./EditInvoiceFormGerman";
import { useContext } from "react";
import { AppContext } from "../App";

const Invoice = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-700);
  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;
`;

const ActionsCell = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default function InvoiceRow({ invoice, handleDeleteInvoice, handleDuplicateInvoice }) {
  const { language } = useContext(AppContext);

  const {
    vat_id,
    order_no,
    contractor,
    order_date,
    acceptance_date,
  } = invoice;

  // const toggleLanguage = () => {
  //   setLanguage(language === "english" ? "german" : "english");
  // };

  return (
    <Table.Row role="row">
      <Invoice>{vat_id}</Invoice>
      <Invoice>{order_no}</Invoice>
      <Invoice>{contractor}</Invoice>
      <Invoice>{order_date}</Invoice>
      <Invoice>{acceptance_date}</Invoice>
      <ActionsCell>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={vat_id} />

            <Menus.List id={vat_id}>    
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={() => handleDuplicateInvoice(order_no)}
              >
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button
                  icon={<HiPencil />}
                >
                  Edit
                </Menus.Button>
              </Modal.Open>
              
              <Modal.Open opens="delete">
                <Menus.Button
                  icon={<HiTrash />}
                >
                  Delete
                </Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="edit">
            {language === "english" ? (
              <EditInvoiceFormEnglish invoice={invoice}/>
            ) : (
              <EditInvoiceFormGerman invoice={invoice}/>
            )}
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName='invoice'
              onConfirm={() => handleDeleteInvoice(order_no)} />
          </Modal.Window>
        </Modal>
      </ActionsCell>
    </Table.Row>
  )
}
