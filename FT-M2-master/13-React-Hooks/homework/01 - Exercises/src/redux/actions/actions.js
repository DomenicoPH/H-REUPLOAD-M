export const FORM_DATA = 'FORM_DATA';

export const enviarForm = (formulario) => {
    return{
        type: FORM_DATA,
        payload: formulario,
    }
}