import React from "react";
import Preloader from "../Components/Common/Preloader/Preloader";

export const hocWithLazyLoad = (Component) => {
	return (props) => (
		<React.Suspense fallback={ <Preloader/> }>
			<Component { ...props } />
		</React.Suspense>
	);
}