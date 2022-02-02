import React, { useRef } from "react";
import { StyledButton } from "../../Login/Styled/StyledButton";
import { AddressformStyled } from "./AddressformStyled";
import FormElement from "./Formelement/FormElement";

function Addressform({ setFormData, setStep, formData }) {
  const addressref = useRef();
  const addressCref = useRef();
  const cityref = useRef();
  const provinceref = useRef();
  const postalcoderef = useRef();
  const emailref = useRef();

  const placeFholder = (ref) => {
    ref.current.name === "Address"
      ? (addressref.current.placeholder = "")
      : (addressref.current.placeholder = "Address");
    ref.current.name === "Address continue"
      ? (addressCref.current.placeholder = "")
      : (addressCref.current.placeholder = "Address(continue)");
    ref.current.name === "City"
      ? (cityref.current.placeholder = "")
      : (cityref.current.placeholder = "City");
    ref.current.name === "Province"
      ? (provinceref.current.placeholder = "")
      : (provinceref.current.placeholder = "Province");
    ref.current.name === "Postal code"
      ? (postalcoderef.current.placeholder = "")
      : (postalcoderef.current.placeholder = "Postal code");
    ref.current.name === "Email"
      ? (emailref.current.placeholder = "")
      : (emailref.current.placeholder = "Email");
  };
  const handleChange = (ref) => {
    let value = ref.current.value;
    let name =
      ref.current.name[0].toLowerCase() +
      ref.current.name.replace(" ", "").slice(1);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    let validate = false;
    for (let prop in formData) {
      if (prop === "email") {
        //eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData[prop])
          ? (validate = true)
          : (validate = false);
      } else if (formData[prop].length > 0) validate = true;
      if (!validate) break;
    }
    validate ? setStep(2) : alert("Invalid data");
  };
  return (
    <AddressformStyled>
      <FormElement
        setName="Address"
        placeFholder={placeFholder}
        setRef={addressref}
        handleChange={handleChange}
      />
      <FormElement
        setName="Address continue"
        placeFholder={placeFholder}
        setRef={addressCref}
        handleChange={handleChange}
      />
      <FormElement
        setName="City"
        placeFholder={placeFholder}
        setRef={cityref}
        handleChange={handleChange}
      />
      <FormElement
        setName="Province"
        placeFholder={placeFholder}
        setRef={provinceref}
        handleChange={handleChange}
      />
      <FormElement
        setName="Postal code"
        placeFholder={placeFholder}
        setRef={postalcoderef}
        handleChange={handleChange}
      />
      <FormElement
        setName="Email"
        placeFholder={placeFholder}
        setRef={emailref}
        handleChange={handleChange}
      />
      <StyledButton backgroundcolor={"#123456"} onClick={handleSubmit}>
        Submit
      </StyledButton>
    </AddressformStyled>
  );
}

export default Addressform;