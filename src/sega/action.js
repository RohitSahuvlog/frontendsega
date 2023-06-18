export const resetForm = () => ({
    type: 'RESET_FORM',
});

export const fetchData = (values) => ({
    type: 'FETCH_DATA',
    payload: values,
});
