import styled from 'styled-components'
import GlobalStyles from './Styles/GlobalStyles'
import { Toaster } from "react-hot-toast";
import InvoiceTable from './Components/InvoiceTable';
import { createContext, useState } from 'react';

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  width: 100%;
`

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

const LanguageToggle = styled.button`
  background: none;
  border: none;
  color: var(--color-grey-600);
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
    color: var(--color-grey-900);
  }
`;

const DUMMY = [
  {
      // Page 1
      vat_id: "DE153994407",
      location: "Dessau Roßlau, Nr. 09200",
      contractor: "High-Voltage Lighting Technology",
      order_no: "527825",
      trade: "",
      order_date: "30/05/2024",
      additional_order_no: "",
      order_value: "", // Order Value in €
      acceptance_date: "13/06/2024",

      for_contractor: "Bernd Ballaschk",
      for_purchaser: "Carlo Sieber",
      
      all_docs_handed_over: false,
      agreements_made_in_order_check: false,
      agreements_made_english: [
          {label: "minor defects still need to be remedied", check: false, completion_by: ""},
          {label: "deliveries / services to be provide",check: false, completion_by: ""},
          {label: "technical documents to be delivered or supplemented", check: false, completion_by: ""},
          {label: "dm will be withheld from the next", check: false, payment: ""},
      ],
      agreements_made_german: [
          {label: "geringe Mängel müssen noch behoben werden", check: false, completion_by: ""},
          {label: "Lieferungen / Leistungen zu erbringen", check: false, completion_by: ""},
          {label: "technische Unterlagen zu liefern oder zu ergänzen", check: false, completion_by: ""},
          {label: "DM wird vom nächsten einbehalten", check: false, payment: ""},
      ],
      acceptance: false,
      target: "",
      actual: "",
      remarks: "",

      // Page 2
      site_name: "",
      type: "",
      ne_id_umd: "",
      date: "",
      distribution_list: {
          copy_1: "",
          copy_2: "",
          copy_3: "",
          copy_4: "",
          copy_5: "",
          copy_6: "",
          copy_7: "",
          copy_8: "",
      },
      old_antenna_type: "",
      antenna_replacement: false,
      new_antenna_type: "",
      retrofitting_mechanical_dt_brackets: false,
      new_indoor_jumper: false,
      new_outdoor_jumper: false,
      dismantling_ccu: false,
      new_duamco: false,
      old_tta: {
          name: "",
          single: false,
          double: false,
      },
      new_tta_installation_location: "",
      new_tta: {
          name: "",
          single: false,
          double: false,
      },
      construction_measures: "",
      new_regtp_certificate_required: false,
      new_as_built_plant_required: false,
      system_checklist: {
          fun_data_sheet: false,
          change_request: false,
      },

      // Page 3
      fixed_operating_room: false,
      ceiling_height_greater_than: false,
      lighting: false,

      container: false,
      manufacturer: "",
      dimensions: {
          w: "",
          h: "",
          d: ""
      },

      air_conditioning_present: false,
      roxiex_frame: false,
      filler_pieces: "",
      
      operating_room_clean: false,
      cable_gland_present: false,
      space_requirements_inside: false,
      
      notes_product_inside: "",

      // separator
      foundation: false,
      mounting_bolts: false,

      steel_substructure: false,
      steel_substructure_grounded: false,
      
      drilling_pattern: false,
      space_requirements_outside: false,
      
      wall_brackets: false,
      cable_route_signal_cables: false,
      
      notes_product_outside: "",

      // Separator
      plans_for_first_pix_panel: false,
      cable_route: false,
      mast_prepared: false,
      
      los_documents: false,
      bearing_radii: false,
      mast_diameter: "",
      
      riser_cover: false,
      grounding_points_available: false,
      
      anchor_points: false,
      alignment_of_mast: false,
      
      access_to_mast: false,
      attachment_point_spar_broom_available: false,
      
      rich_layout: false,
      hl_production: false,
      dry_cartridge: false,
      
      hl_quasar_90: false,
      hl_grounding: false,
      nitrogen_purge: false,
      
      hl_quasar_85: false,
      hl_covering: false,
      
      notes_3: "",

      // Separator
      agreements: [{
          type: "",
          completion_date: "",
          customer: "",
          supplier: "",
      }],

      // Page 4
      customer_charge_agreed_contractual_penalties: false,
      object_does_not_correspond_agreements: false,
      construction_documentation: false,
      calibration_certificate: false,
      electrical_documentation: false,
      air_conditioning_documentation: false,
      other_documents: "",

      // Separator
      warranty: {
          rectification_check: false,
          begins: "",
          ends: "",
          date_specified_in: "",
      },

      // Separator
      accepting_department: "",
      location_2: "",
      receptionist_department: "",
      signature_1: "",
      signature_2: "",
  }
]


export const AppContext = createContext();

function App() {
  const [invoice, setInvoice] = useState(DUMMY);
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "german" : "english");
  };

  return (
    <AppContext.Provider value={{invoice, setInvoice, language}}>
      <GlobalStyles />
      <StyledAppLayout>
        <Main>
          <Container>
            <LanguageToggle onClick={toggleLanguage}>
                  {language === "english" ? "DE" : "EN"}
            </LanguageToggle>

            <InvoiceTable />

            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: '16px',
                  maxWidth: '500px',
                  padding: '16px 24px',
                  backgroundColor: "var(--color-grey-0)",
                  color: "var(--color-grey-700)",
                }
              }}
            />
          </Container>
        </Main>
      </StyledAppLayout>
    </AppContext.Provider>
  )
}

export default App;
