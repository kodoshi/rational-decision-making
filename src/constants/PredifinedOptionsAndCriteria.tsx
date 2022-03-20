import {OptionAndCriteria} from '../services/redux/actionsAndSlicers/OptionsAndCriteriaSlice';

export const predefinedDecisionOptions: OptionAndCriteria[] = [
	{
		id: 1,
		name: 'Investing in BTC',
		score: 0,
	},
	{
		id: 2,
		name: 'Investing in blue-chip stocks',
		score: 0,
	},
	{
		id: 3,
		name: "Don't invest at all",
		score: 0,
	},
];

export const predefinedSelectionCriteria: OptionAndCriteria[] = [
	{
		id: 1,
		name: 'Lack of cashflow',
		score: 0,
	},
	{
		id: 2,
		name: 'Long term profit',
		score: 0,
	},
	{
		id: 3,
		name: 'Short term profit',
		score: 0,
	}
];
