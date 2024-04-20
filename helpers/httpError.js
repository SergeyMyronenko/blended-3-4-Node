export default function httpError(status, message) {
	const error = new Error(message);
	error.status = status;
	return error;
}
