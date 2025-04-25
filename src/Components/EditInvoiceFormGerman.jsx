import { useContext } from "react"
import Button from "./Button"
import Form from "./Form"
import FormInputField from "./FormInputField"
import FormRow from "./FormRow"
import Input from "./Input"
import {AppContext} from "../App"
import FormColumn from "./FormColumn"
import TextArea from "./TextArea"

export default function EditInvoiceFormGerman({ invoice, onCloseModal }) {
    const {setInvoice} = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get all form inputs
        const formData = new FormData(e.target);
        const updatedInvoice = {
            ...invoice,
            // Page 1
            vat_id: formData.get('vat_id'),
            location: formData.get('location'),
            contractor: formData.get('contractor'),
            order_no: formData.get('order_no'),
            trade: formData.get('trade'),
            order_date: formData.get('order_date'),
            additional_order_no: formData.get('additional_order_no'),
            order_value: formData.get('order_value'),
            acceptance_date: formData.get('acceptance_date'),
            for_contractor: formData.get('for_contractor'),
            for_purchaser: formData.get('for_purchaser'),
            all_docs_handed_over: formData.get('all_docs_handed_over') === 'on',
            agreements_made_in_order_check: formData.get('agreements_made_in_order_check') === 'on',
            agreements_made_english: invoice.agreements_made_english.map((problem, index) => ({
                ...problem,
                check: formData.get(`problem_${index}_check`) === 'on',
                completion_by: formData.get(`problem_${index}_completion_by`) || '',
                payment: formData.get(`problem_${index}_payment`) || ''
            })),
            agreements_made_german: invoice.agreements_made_german.map((problem, index) => ({
                ...problem,
                check: formData.get(`problem_${index}_check`) === 'on',
                completion_by: formData.get(`problem_${index}_completion_by`) || '',
                payment: formData.get(`problem_${index}_payment`) || ''
            })),
            acceptance: formData.get('acceptance') === 'on',
            target: formData.get('target'),
            actual: formData.get('actual'),
            remarks: formData.get('remarks'),

            // Page 2
            site_name: formData.get('site_name'),
            type: formData.get('type'),
            ne_id_umd: formData.get('ne_id_umd'),
            date: formData.get('date'),
            distribution_list: {
                copy_1: formData.get('copy_1'),
                copy_2: formData.get('copy_2'),
                copy_3: formData.get('copy_3'),
                copy_4: formData.get('copy_4'),
                copy_5: formData.get('copy_5'),
                copy_6: formData.get('copy_6'),
                copy_7: formData.get('copy_7'),
                copy_8: formData.get('copy_8'),
            },
            old_antenna_type: formData.get('old_antenna_type'),
            antenna_replacement: formData.get('antenna_replacement') === 'on',
            new_antenna_type: formData.get('new_antenna_type'),
            retrofitting_mechanical_dt_brackets: formData.get('retrofitting_mechanical_dt_brackets') === 'on',
            new_indoor_jumper: formData.get('new_indoor_jumper') === 'on',
            new_outdoor_jumper: formData.get('new_outdoor_jumper') === 'on',
            dismantling_ccu: formData.get('dismantling_ccu') === 'on',
            new_duamco: formData.get('new_duamco') === 'on',
            old_tta: {
                name: formData.get('old_tta_name'),
                single: formData.get('old_tta_single') === 'on',
                double: formData.get('old_tta_double') === 'on',
            },
            new_tta_installation_location: formData.get('new_tta_installation_location'),
            new_tta: {
                name: formData.get('new_tta_name'),
                single: formData.get('new_tta_single') === 'on',
                double: formData.get('new_tta_double') === 'on',
            },
            construction_measures: formData.get('construction_measures'),
            new_regtp_certificate_required: formData.get('new_regtp_certificate_required') === 'on',
            new_as_built_plant_required: formData.get('new_as_built_plant_required') === 'on',
            system_checklist: {
                fun_data_sheet: formData.get('fun_data_sheet') === 'on',
                change_request: formData.get('change_request') === 'on',
            },

            // Page 3
            fixed_operating_room: formData.get('fixed_operating_room') === 'on',
            container: formData.get('container') === 'on',
            air_conditioning_present: formData.get('air_conditioning_present') === 'on',
            operating_room_clean: formData.get('operating_room_clean') === 'on',
            ceiling_height_greater_than: formData.get('ceiling_height_greater_than') === 'on',
            manufacturer: formData.get('manufacturer'),
            roxiex_frame: formData.get('roxiex_frame') === 'on',
            cable_gland_present: formData.get('cable_gland_present') === 'on',
            lighting: formData.get('lighting') === 'on',
            dimensions: {
                w: formData.get('dimensions_w'),
                h: formData.get('dimensions_h'),
                d: formData.get('dimensions_d')
            },
            filler_pieces: formData.get('filler_pieces'),
            space_requirements_inside: formData.get('space_requirements_inside') === 'on',
            notes_product_inside: formData.get('notes_product_inside'),
            foundation: formData.get('foundation') === 'on',
            steel_substructure: formData.get('steel_substructure') === 'on',
            drilling_pattern: formData.get('drilling_pattern') === 'on',
            wall_brackets: formData.get('wall_brackets') === 'on',
            mounting_bolts: formData.get('mounting_bolts') === 'on',
            steel_substructure_grounded: formData.get('steel_substructure_grounded') === 'on',
            space_requirements_outside: formData.get('space_requirements_outside') === 'on',
            cable_route_signal_cables: formData.get('cable_route_signal_cables') === 'on',
            notes_product_outside: formData.get('notes_product_outside'),
            plans_for_first_pix_panel: formData.get('plans_for_first_pix_panel') === 'on',
            los_documents: formData.get('los_documents') === 'on',
            riser_cover: formData.get('riser_cover') === 'on',
            anchor_points: formData.get('anchor_points') === 'on',
            access_to_mast: formData.get('access_to_mast') === 'on',
            rich_layout: formData.get('rich_layout') === 'on',
            hl_quasar_90: formData.get('hl_quasar_90') === 'on',
            hl_quasar_85: formData.get('hl_quasar_85') === 'on',
            cable_route: formData.get('cable_route') === 'on',
            bearing_radii: formData.get('bearing_radii') === 'on',
            hl_production: formData.get('hl_production') === 'on',
            hl_grounding: formData.get('hl_grounding') === 'on',
            mast_prepared: formData.get('mast_prepared') === 'on',
            mast_diameter: formData.get('mast_diameter'),
            grounding_points_available: formData.get('grounding_points_available') === 'on',
            alignment_of_mast: formData.get('alignment_of_mast') === 'on',
            attachment_point_spar_broom_available: formData.get('attachment_point_spar_broom_available') === 'on',
            dry_cartridge: formData.get('dry_cartridge') === 'on',
            nitrogen_purge: formData.get('nitrogen_purge') === 'on',
            hl_covering: formData.get('hl_covering') === 'on',
            notes_3: formData.get('notes_3'),
            agreements: [{
                type: formData.get('agreements_type'),
                completion_date: formData.get('agreements_completion_date'),
                customer: formData.get('agreements_customer'),
                supplier: formData.get('agreements_supplier'),
            }],

            // Page 4
            customer_charge_agreed_contractual_penalties: formData.get('customer_charge_agreed_contractual_penalties') === 'on',
            object_does_not_correspond_agreements: formData.get('object_does_not_correspond_agreements') === 'on',
            construction_documentation: formData.get('construction_documentation') === 'on',
            calibration_certificate: formData.get('calibration_certificate') === 'on',
            electrical_documentation: formData.get('electrical_documentation') === 'on',
            air_conditioning_documentation: formData.get('air_conditioning_documentation') === 'on',
            other_documents: formData.get('other_documents'),
            warranty: {
                rectification_check: formData.get('warranty_rectification_check') === 'on',
                begins: formData.get('warranty_begins'),
                ends: formData.get('warranty_ends'),
                date_specified_in: formData.get('warranty_date_specified_in'),
            },
            for_contractor_2: formData.get('for_contractor_2'),
            accepting_department: formData.get('accepting_department'),
            location_2: formData.get('location_2'),
            receptionist_department: formData.get('receptionist_department'),
            signature_1: formData.get('signature_1'),
            signature_2: formData.get('signature_2'),
        };

        // Update the invoice in the context
        setInvoice(prevInvoices => 
            prevInvoices.map(inv => 
                inv.order_no === invoice.order_no ? updatedInvoice : inv
            )
        );

        // Close the modal
        onCloseModal?.();
    }

    const addAgreement = () => {
        setInvoice(prevInvoices => 
            prevInvoices.map(inv => 
                inv.order_no === invoice.order_no 
                    ? {
                        ...inv,
                        agreements: [
                            ...inv.agreements,
                            { type: '', completion_date: '', customer: '', supplier: '' }
                        ]
                    }
                    : inv
            )
        );
    };

    const removeAgreement = (index) => {
        setInvoice(prevInvoices => 
            prevInvoices.map(inv => 
                inv.order_no === invoice.order_no 
                    ? {
                        ...inv,
                        agreements: inv.agreements.filter((_, i) => i !== index)
                    }
                    : inv
            )
        );
    };

    return (
        <Form type={onCloseModal ? "modal" : "regular"} onSubmit={handleSubmit}>
            <hr />
            <FormRow>
                <FormInputField label="St-IdNr.">
                    <Input type="text" defaultValue={invoice.vat_id} name="vat_id" id="vat_id"/>
                </FormInputField>

                <FormInputField label="Standort">
                    <Input type="text" defaultValue={invoice.location} name="location" id="location"/>
                </FormInputField>
            </FormRow>

            <hr />

            <FormRow>
                <FormInputField label="Auftragnehmer">
                    <Input type="text" defaultValue={invoice.contractor} name="contractor" id="contractor"/>
                </FormInputField>

                <FormInputField label="Auftragsnummer">
                    <Input type="text" defaultValue={invoice.order_no} name="order_no" id="order_no"/>
                </FormInputField>
            </FormRow>

            <hr />

            <FormRow>
                <FormInputField label="Auftragsnummer">
                    <Input type="text" defaultValue={invoice.order_no} name="order_no" id="order_no"/>
                </FormInputField>

                <FormInputField label="Gewerk">
                    <Input type="text" defaultValue={invoice.trade} name="trade" id="trade"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Bestell-Datum">
                    <Input type="date" defaultValue={invoice.order_date} name="order_date" id="order_date"/>
                </FormInputField>

                <FormInputField label="Einschl. d. Zusatzauftrag Nr.">
                    <Input type="text" defaultValue={invoice.additional_order_no} name="additional_order_no" id="additional_order_no"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Auftragswert in">
                    <Input type="text" defaultValue={invoice.order_value} name="order_value" id="order_value"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Abnahmedatum">
                    <Input type="date" defaultValue={invoice.acceptance_date} name="acceptance_date" id="acceptance_date"/>
                </FormInputField>
            </FormRow>

            <hr />

            <FormRow>
                <FormInputField label="Für den Auftragnehmer">
                    <Input type="text" defaultValue={invoice.for_contractor} name="for_contractor" id="for_contractor"/>
                </FormInputField>

                <FormInputField label="Für den Auftraggeber">
                    <Input type="text" defaultValue={invoice.for_purchaser} name="for_purchaser" id="for_purchaser"/>
                </FormInputField>
            </FormRow>

            <hr />

            <h1>Abnahmeergebnis</h1>
            <FormColumn>
                <FormInputField label="Das Objekt entspricht den im Auftrag getroffenen Vereinbarungen. Alle technischen Unterlagen zum Zeitpunkt der Abnahme wurden übergeben. Die vom Auftragnehmer verwendeten Anlagen und Geräte wurden übergeben oder in ordnungsgemäßem Zustand übergeben.">
                    <Input type="checkbox" defaultChecked={invoice.all_docs_handed_over} name="all_docs_handed_over"/>
                </FormInputField>

                <FormInputField label="Das Objekt entspricht den im Auftrag getroffenen Vereinbarungen, jedoch">
                    <Input type="checkbox" defaultChecked={invoice.agreements_made_in_order_check} name="agreements_made_in_order_check"/>
                </FormInputField>

                {invoice.agreements_made_german.map((problem, index) => {
                    return (
                        <FormRow key={index}>
                            <FormInputField label={problem.label}>
                                <Input type="checkbox" defaultChecked={problem.check} name={`problem_${index}_check`}/>
                            </FormInputField>

                            <FormInputField label={problem.completion_by ? "Fertigstellung bis" : "Zahlung / Schlusszahlung bis zur Fertigstellung"}>
                                <Input 
                                    type="text" 
                                    defaultValue={problem.completion_by ? problem.completion_by : problem.payment} 
                                    name={`problem_${index}_${problem.completion_by ? 'completion_by' : 'payment'}`}
                                />
                            </FormInputField>
                        </FormRow>
                    )
                })}
            </FormColumn>

            <FormRow>
                <FormInputField label="Die Abnahme wird hiermit erklärt. Termine unterliegen der Terminsicherheit beginnen mit dem Probebetrieb">
                    <Input type="checkbox" defaultChecked={invoice.acceptance} name="acceptance"/>
                    <TextArea /> 
                </FormInputField>

                <FormInputField label="Ziel">
                    <TextArea defaultValue={invoice.target} name="target"/>
                </FormInputField>

                <FormInputField label="Aktuell">
                    <TextArea defaultValue={invoice.actual} name="actual"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Bemerkungen">
                    <TextArea defaultValue={invoice.remarks} name="remarks"/>
                </FormInputField>
            </FormRow>

            <hr />

            <h1>TR-Protokoll</h1>
            <h2>Aufgabe RET Retrofit</h2>
            
            <FormRow>
                <FormInputField label="Standortname">
                        <Input type="text" defaultValue={invoice.site_name} name="site_name"/> 
                </FormInputField>
                
                <FormInputField label="Typ">
                        <Input type="text" defaultValue={invoice.type} name="type"/> 
                </FormInputField>
            </FormRow>
            
            <FormRow>
                <FormInputField label="NE-ID UMD">
                        <Input type="text" defaultValue={invoice.ne_id_umd} name="ne_id_umd"/> 
                </FormInputField>

                <FormInputField label="Datum">
                        <Input type="date" defaultValue={invoice.date} name="date"/> 
                </FormInputField>
            </FormRow>

            <FormColumn>
                <h3>Verteilerliste</h3>
                {Object.keys(invoice.distribution_list).map((key) => {
                    return(
                        <FormInputField label={`${key}`}>
                            <Input type="text" defaultValue={invoice.distribution_list[key]} name={`distribution_list.${key}`}/>
                        </FormInputField>
                    )
                })}
            </FormColumn>

            <FormRow>
                <FormInputField label="Alter Antennentyp">
                    <Input type="text" defaultValue={invoice.old_antenna_type} name="old_antenna_type"/>
                </FormInputField>

                <FormInputField label="Antennenersatz">
                    <Input type="checkbox" defaultChecked={invoice.antenna_replacement} name="antenna_replacement"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Neuer Antennentyp">
                    <Input type="text" defaultValue={invoice.new_antenna_type} name="new_antenna_type"/>
                </FormInputField>

                <FormInputField label="Nachrüstung mechanischer DT-Halterungen">
                    <Input type="checkbox" defaultChecked={invoice.retrofitting_mechanical_dt_brackets} name="retrofitting_mechanical_dt_brackets"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Neuer Indoor-Jumper">
                    <Input type="checkbox" defaultChecked={invoice.new_indoor_jumper} name="new_indoor_jumper"/> 
                </FormInputField>

                <FormInputField label="Alter Indoor-Jumper">
                    <Input type="checkbox" defaultChecked={invoice.old_indoor_jumper} name="old_indoor_jumper"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Demontage bestehender CCU und Steuerkabel">
                    <Input type="checkbox" defaultChecked={invoice.dismantling_ccu} name="dismantling_ccu"/> 
                </FormInputField>

                <FormInputField label="Alter Indoor-Jumper">
                    <Input type="checkbox" defaultChecked={invoice.new_duamco} name="new_duamco"/>
                </FormInputField>
            </FormRow>

            <FormColumn>
                {Object.keys(invoice.old_tta).map((key) => {
                    const isNameField = key === "name";
                    const inputProps = isNameField
                    ? { type: "text", defaultValue: invoice.old_tta[key], name: "name"}
                    : { type: "checkbox", defaultChecked: invoice.old_tta[key], name: `${key}` };

                    return (
                    <FormInputField key={key} label={isNameField ? "Alte TTA" : key}>
                        <Input {...inputProps} />
                    </FormInputField>
                    );
                })}
            </FormColumn>

            <FormColumn>
                {Object.keys(invoice.new_tta).map((key) => {
                    const isNameField = key === "name";
                    const inputProps = isNameField
                    ? { type: "text", defaultValue: invoice.new_tta[key], name: "name"}
                    : { type: "checkbox", defaultChecked: invoice.new_tta[key], name: `${key}` };

                    return (
                    <FormInputField key={key} label={isNameField ? "Neue TTA" : key}>
                        <Input {...inputProps} />
                    </FormInputField>
                    );
                })}

                <FormInputField label="Installationsort der neuen TTA">
                    <TextArea defaultValue={invoice.new_tta_installation_location} name="new_tta_installation_location"/>
                </FormInputField>
            </FormColumn>
            
            <FormRow>
                <FormInputField label="Baumaßnahmen">
                    <TextArea defaultValue={invoice.construction_measures} name="construction_measures"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Neues RegTP-Zertifikat erforderlich">
                    <Input type="checkbox" defaultChecked={invoice.new_regtp_certificate_required} name="new_regtp_certificate_required"/> 
                </FormInputField>

                <FormInputField label="Neuer As-built-Plan erforderlich">
                    <Input type="checkbox" defaultChecked={invoice.new_as_built_plant_required} name="new_as_built_plant_required"/>
                </FormInputField>
            </FormRow>

            <FormColumn>
                <h3>System-Checkliste</h3>
                {Object.keys(invoice.system_checklist).map((key) => {
                    return(
                        <FormInputField label={key}>
                            <Input type="checkbox" defaultChecked={invoice.system_checklist[key]} name={`system_checklist.${key}`}/>
                        </FormInputField>
                    )
                })}
            </FormColumn>

            <hr />

            <h2>8. Produktbezogene Anforderungen (Innen)</h2>
            
            <FormRow>
                <FormInputField label="Fester Betriebsraum">
                    <Input type="checkbox" defaultChecked={invoice.fixed_operating_room} name="fixed_operating_room"/> 
                </FormInputField>

                <FormInputField label="Deckenhöhe >=2,5m?">
                    <Input type="checkbox" defaultChecked={invoice.ceiling_height_greater_than} name="ceiling_height_greater_than"/> 
                </FormInputField>

                <FormInputField label="Beleuchtung">
                    <Input type="checkbox" defaultChecked={invoice.lighting} name="lighting"/> 
                </FormInputField>
            </FormRow>
            
            <FormRow>
                <FormInputField label="Container">
                    <Input type="checkbox" defaultChecked={invoice.container} name="container"/> 
                </FormInputField>

                <FormInputField label="Hersteller?">
                    <Input type="text" defaultValue={invoice.manufacturer} name="manufacturer"/> 
                </FormInputField>

                <FormInputField label="Abmessungen (BxHxT)">
                    {Object.keys(invoice.dimensions).map((key) => {
                        return(
                            <Input type="text" defaultValue={invoice.dimensions[key]} name={`dimensions.${key}`}/> 
                        )
                    })}
                </FormInputField>
            </FormRow>
            
            <FormRow>
                <FormInputField label="Klimaanlage vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.air_conditioning_present} name="air_conditioning_present"/> 
                </FormInputField>

                <FormInputField label="Roxiex-Rahmen vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.roxiex_frame} name="roxiex_frame"/> 
                </FormInputField>

                <FormInputField label="Füllstücke vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.filler_pieces} name="filler_pieces"/> 
                </FormInputField>
            </FormRow>
            
            <FormRow>
                <FormInputField label="Betriebsraum sauber?">
                    <Input type="checkbox" defaultChecked={invoice.operating_room_clean} name="operating_room_clean"/> 
                </FormInputField>

                <FormInputField label="Kabelverschraubung (2202) vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.cable_gland_present} name="cable_gland_present"/> 
                </FormInputField>

                <FormInputField label="Raumbedarf OK?">
                    <Input type="checkbox" defaultChecked={invoice.space_requirements_inside} name="space_requirements_inside"/> 
                </FormInputField>
            </FormRow>

            <FormInputField label="Bemerkungen">
                <TextArea defaultValue={invoice.notes_product_inside} name="notes_product_inside"/>
            </FormInputField>

            <hr />

            <h2>9. Produktbezogene Anforderungen (Außen)</h2>

            <FormRow>
                <FormInputField label="Fundament">
                    <Input type="checkbox" defaultChecked={invoice.foundation} name="foundation"/>
                </FormInputField>
 
                <FormInputField label="Befestigungsschrauben M16 vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.mounting_bolts} name="mounting_bolts"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Stahlunterkonstruktion">
                    <Input type="checkbox" defaultChecked={invoice.steel_substructure} name="steel_substructure"/>
                </FormInputField>
 
                <FormInputField label="Stahlunterkonstruktion geerdet?">
                    <Input type="checkbox" defaultChecked={invoice.steel_substructure_grounded} name="steel_substructure_grounded"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Bohrbild OK?">
                    <Input type="checkbox" defaultChecked={invoice.drilling_pattern} name="drilling_pattern"/>
                </FormInputField>
 
                <FormInputField label="Raumbedarf OK? (Erweiterungen)">
                    <Input type="checkbox" defaultChecked={invoice.space_requirements_outside} name="space_requirements_outside"/>
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Wandhalterungen erforderlich?">
                    <Input type="checkbox" defaultChecked={invoice.wall_brackets} name="wall_brackets"/>
                </FormInputField>
 
                <FormInputField label="Kabelweg für Signalkabel vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.cable_route_signal_cables} name="cable_route_signal_cables"/>
                </FormInputField>
            </FormRow>

            <FormInputField label="Bemerkungen">
                <TextArea defaultValue={invoice.notes_product_outside} name="notes_product_outside"/>
            </FormInputField>

            <hr />

            <FormRow>
                <FormInputField label="Pläne für 1. pix-Panel vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.plans_for_first_pix_panel} name="plans_for_first_pix_panel"/> 
                </FormInputField>

                <FormInputField label="Kabelweg vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.cable_route} name="cable_route"/> 
                </FormInputField>

                <FormInputField label="Mast vorbereitet?">
                    <Input type="checkbox" defaultChecked={invoice.mast_prepared} name="mast_prepared"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="LOS-Dokumente vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.plans_for_first_pix_panel} name="plans_for_first_pix_panel"/> 
                </FormInputField>

                <FormInputField label="Tragradien zu beachten?">
                    <Input type="checkbox" defaultChecked={invoice.bearing_radii} name="bearing_radii"/> 
                </FormInputField>

                <FormInputField label="Mastdurchmesser (mm)">
                    <Input type="text" defaultValue={invoice.mast_diameter} name="mast_diameter"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Steigrohrdeckel vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.riser_cover} name="rising_cover"/> 
                </FormInputField>

                <FormInputField label="Erdungspunkte nach Richtlinien vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.grounding_points_available} name="grounding_points_available"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Verankerungspunkte vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.anchor_points} name="anchor_points"/> 
                </FormInputField>

                <FormInputField label="Standort/Ausrichtung des Mastes OK?">
                    <Input type="checkbox" defaultChecked={invoice.alignment_of_mast} name="alignment_of_mast"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Zugang zum Mast in Ordnung?">
                    <Input type="checkbox" defaultChecked={invoice.access_to_mast} name="access_to_mast"/> 
                </FormInputField>

                <FormInputField label="Anschlusspunkt für Sparbühne vorhanden?">
                    <Input type="checkbox" defaultChecked={invoice.attachment_point_spar_broom_available} name="attachment_point_spar_broom_available"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="Rack-Layout aktuell?">
                    <Input type="checkbox" defaultChecked={invoice.rich_layout} name="rich_layout"/> 
                </FormInputField>

                <FormInputField label="HL-Produktion">
                    <Input type="checkbox" defaultChecked={invoice.hl_production} name="hl_production"/> 
                </FormInputField>

                <FormInputField label="Trockenpatrone">
                    <Input type="checkbox" defaultChecked={invoice.dry_cartridge} name="dry_cartridge"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="HL quasar 0,90m">
                    <Input type="checkbox" defaultChecked={invoice.hl_quasar_90} name="hl_quasar_90"/> 
                </FormInputField>

                <FormInputField label="HL-Erdung">
                    <Input type="checkbox" defaultChecked={invoice.hl_grounding} name="hl_grounding"/> 
                </FormInputField>

                <FormInputField label="Stickstoffspülung">
                    <Input type="checkbox" defaultChecked={invoice.nitrogen_purge} name="nitrogen_purge"/> 
                </FormInputField>
            </FormRow>

            <FormRow>
                <FormInputField label="HL quasar 0,85m">
                    <Input type="checkbox" defaultChecked={invoice.hl_quasar_85} name="hl_quasar_85"/> 
                </FormInputField>

                <FormInputField label="HL-Abdeckung">
                    <Input type="checkbox" defaultChecked={invoice.hl_grounding} name="hl_grounding"/> 
                </FormInputField>
            </FormRow>

            <FormInputField label="Bemerkungen">
                <TextArea defaultValue={invoice.notes_3} name="notes_3"/>
            </FormInputField>

            <hr />

            <FormInputField label="Vereinbarungen">
                {invoice.agreements.map((agreement, index) => (
                    <div key={index}>
                        <FormRow>
                            <FormInputField label="Vereinbarungsart">
                                <Input 
                                    type="text" 
                                    defaultValue={agreement.type} 
                                    name={`agreements[${index}].type`} 
                                    id={`agreements_${index}_type`}
                                />
                            </FormInputField>

                            <FormInputField label="Fertigstellungsdatum">
                                <Input 
                                    type="date" 
                                    defaultValue={agreement.completion_date} 
                                    name={`agreements[${index}].completion_date`} 
                                    id={`agreements_${index}_completion_date`}
                                />
                            </FormInputField>
                        </FormRow>

                        <FormRow>
                            <FormInputField label="Kunde">
                                <Input 
                                    type="text" 
                                    defaultValue={agreement.customer} 
                                    name={`agreements[${index}].customer`} 
                                    id={`agreements_${index}_customer`}
                                />
                            </FormInputField>

                            <FormInputField label="Lieferant">
                                <Input 
                                    type="text" 
                                    defaultValue={agreement.supplier} 
                                    name={`agreements[${index}].supplier`} 
                                    id={`agreements_${index}_supplier`}
                                />
                            </FormInputField>

                            <button type="button" onClick={() => removeAgreement(index)}>Entfernen</button>
                        </FormRow>

                        <hr />
                    </div>
                ))}
                <button type="button" onClick={addAgreement}>Vereinbarung hinzufügen</button>

                <hr />

                <h3>Der Kunde wird die vereinbarte Terminsicherheitssumme in Rechnung stellen</h3>

                <FormColumn>
                    <FormInputField label="Der Kunde wird die vereinbarten Vertragsstrafen in Rechnung stellen">
                        <Input type="checkbox" defaultChecked={invoice.customer_charge_agreed_contractual_penalties} name="customer_charge_agreed_contractual_penalties"/>
                    </FormInputField>

                    <FormInputField label="Das Objekt entspricht nicht den Vereinbarungen">
                        <Input type="checkbox" defaultChecked={invoice.object_does_not_correspond_agreements} name="object_does_not_correspond_agreements"/>
                    </FormInputField>

                    <h3>Bei der Abnahme wurden folgende Unterlagen ausgehändigt</h3>
                    
                    <FormInputField label="Das Objekt entspricht nicht den Vereinbarungen">
                        <Input type="checkbox" defaultChecked={invoice.object_does_not_correspond_agreements} name="object_does_not_correspond_agreements"/>
                    </FormInputField>

                    <FormInputField label="Baubeschreibung">
                        <Input type="checkbox" defaultChecked={invoice.construction_documentation} name="construction_documentation"/>
                    </FormInputField>

                    <FormInputField label="Kalibrierzertifikat/GSM-Antennen">
                        <Input type="checkbox" defaultChecked={invoice.calibration_certificate} name="calibration_certificate"/>
                    </FormInputField>

                    <FormInputField label="Elektrobeschreibung">
                        <Input type="checkbox" defaultChecked={invoice.electrical_documentation} name="electrical_documentation"/>
                    </FormInputField>

                    <FormInputField label="Klimabeschreibung">
                        <Input type="checkbox" defaultChecked={invoice.air_conditioning_documentation} name="air_conditioning_documentation"/>
                    </FormInputField>

                    <FormInputField label="Sonstige Unterlagen">
                        <Input type="text" defaultValue={invoice.other_documents} name="other_documents"/>
                    </FormInputField>
                </FormColumn>

                <hr />

                <h3>Gewährleistung</h3>

                <FormRow>
                    <FormInputField label="Nach Beseitigung der oben aufgeführten Mängel">
                        <Input type="checkbox" defaultValue={invoice.warranty.rectification_check} name="warranty.rectification_check"/>
                    </FormInputField>

                    <FormInputField label="Die Gewährleistungsfrist beginnt am">
                        <Input type="date" defaultValue={invoice.warranty.begins} name="warranty.begins"/>
                    </FormInputField>

                    <FormInputField label="und endet am">
                        <Input type="date" defaultValue={invoice.warranty.ends} name="warranty.ends"/>
                    </FormInputField>

                    <FormInputField label="Datum angegeben in">
                        <Input type="text" defaultValue={invoice.warranty.date_specified_in} name="warranty.date_specified_in"/>
                    </FormInputField>

                </FormRow>

                <h3>, der Vertrag, sofern keine Unterbrechung oder Aussetzung erfolgt</h3>

                <hr />

                <FormRow>
                    <h2>Für den Auftragnehmer</h2>

                    <FormInputField label="Abnehmende Abteilung">
                        <Input type="text" defaultValue={invoice.accepting_department} name="accepting_department"/>
                    </FormInputField>

                    <FormInputField label="Standort">
                        <Input type="text" defaultValue={invoice.location} name="location"/>
                    </FormInputField>

                    <FormInputField label="Empfangende Abteilung">
                        <Input type="text" defaultValue={invoice.receptionist_department} name="receptionist_department"/>
                    </FormInputField>

                    <FormInputField label="Unterschrift">
                        <Input type="text" defaultValue={invoice.signature_1} name="signature_1"/>
                    </FormInputField>

                    <FormInputField label="Unterschrift">
                        <Input type="text" defaultValue={invoice.signature_2} name="signature_2"/>
                    </FormInputField>
                </FormRow>

                <FormRow>
                    <Button variation="secondary" type="button" onClick={() => onCloseModal?.()}>
                        Abbrechen
                    </Button>
                    <Button type="submit">Änderungen speichern</Button>
                </FormRow>
            </FormInputField>
        </Form>
    )
} 