import React from "react";
import style from "./FormControl.module.css";


export const Element = Element => ({ input, meta, ...props }) => {
	const hasErrors = meta.touched && meta.error
	return (
		<div className={ `${ style.form_control } ${ hasErrors && style.error }` }>
			{ hasErrors && <span className={ style.errorMessage }>{ meta.error }</span> }
			<Element { ...input } { ...props } />
		</div>
	)
};