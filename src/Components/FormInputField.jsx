import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;


export default function FormInputField({label, children, error}) {
    return (
        <div>
            <Label htmlFor={children?.props?.id}>{label}</Label>
            {children}
            {error && <Error>{error}</Error>}
        </div>
    )
}