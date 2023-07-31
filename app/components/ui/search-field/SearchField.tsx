import { ChangeEvent, FC } from 'react'

import MaterialIcon from '../icons/MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm?: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	inputSearch?: string
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm, inputSearch }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder={`Поиск  ${inputSearch ? `по ${inputSearch}` : ''}`}
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
