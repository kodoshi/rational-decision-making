export enum AlertTypes {
	error = 'error',
	warning = 'warning',
	info = 'info',
	success = 'success',
}


export type AlertType = {
	type: AlertTypes;
	allowClose: boolean;
	autoHide: boolean;
	text: string;
};

export const AlertInitialState: AlertType = {
	type: AlertTypes.error,
	allowClose: true,
	autoHide: false,
	text: '',
};

//WARNINGS
export const NOT_ENOUGH_OPTIONS: AlertType = {
	type: AlertTypes.warning,
	allowClose: false,
	autoHide: false,
	text: 'Pick at least 2 options!',
};

export const NOT_ENOUGH_CRITERIA: AlertType = {
	type: AlertTypes.warning,
	allowClose: false,
	autoHide: false,
	text: 'Input at least 2 criteria!',
};
