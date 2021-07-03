import React, {useState} from "react";
import style from "./Pagination.module.css";

const Pagination = ({onPageChanged, totalCount, pageSize, currentPage, portionSize = 10}) => {

	const pages = []
	const pagesCount = Math.ceil(totalCount / pageSize)
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={style.pagination_wrapper}>
			{/*{portionNumber > 1 && <button className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}*/}
			{<button disabled={portionNumber === 1 && true} className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
			<div className={style.pagination_number_wrapper}>
				{pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map((p, index) => <span
						onClick={() => {onPageChanged(p)}}
						key={index}
						className={`${style.pg_number} ${currentPage === p && style.pg_number_active}`}>
						{p}
					</span>)}
			</div>
			{/*{portionCount > portionNumber && <button className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}*/}
			{<button disabled={portionNumber === portionCount && true} className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
		</div>
	);
}

export default Pagination;