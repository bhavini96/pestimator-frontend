import React from 'react'
import HeaderComponent from "./HeaderComponent";
const LayoutCompoent = (props) => {
    return (
        <>
          <HeaderComponent/>
          {props.children}
        </>
    )
}

export default LayoutCompoent;
