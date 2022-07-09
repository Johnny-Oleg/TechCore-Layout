import React, { useMemo, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { Select, Spin } from 'antd';

import SuffixIcon from '../components/ui/SuffixIcon/SuffixIcon';
import polygonIcon from '../assets/images/popup-icons/polygon.svg';

const useDebounceSelect = ({ fetchOptions, debounceTimeout = 800, ...props }) => {
	const [fetching, setFetching] = useState(false);
	const [options, setOptions] = useState([]);
	const fetchRef = useRef(0);

	const debounceFetcher = useMemo(() => {
		const loadOptions = value => {
			fetchRef.current += 1;
			const fetchId = fetchRef.current;

			setOptions([]);
			setFetching(true);

			fetchOptions(value).then(newOptions => {
				if (fetchId !== fetchRef.current) return;  // for fetch callback order

				setOptions(newOptions);
				setFetching(false);
			})
		}

		return debounce(loadOptions, debounceTimeout);
	}, [fetchOptions, debounceTimeout]);
	return (
		<Select
			labelInValue
			filterOption={false}
			onSearch={debounceFetcher}
			notFoundContent={fetching ? <Spin size="small" /> : null}
			{...props}
			options={options}
			showArrow="true"
			size="large"
			menuItemSelectedIcon={<SuffixIcon icon={polygonIcon} />}
			suffixIcon={<SuffixIcon icon={polygonIcon} />}
			className="modalSelect"
			placement="topLeft"
			// onFocus={() => <h1>Test</h1>}
		/>
	)
}

export default useDebounceSelect;