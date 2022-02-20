export default function AddDataToForm(payload) {
    return {
        type: 'FILTER_USER_DATA',
        data: payload,
    }
}