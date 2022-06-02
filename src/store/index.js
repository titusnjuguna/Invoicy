import { createStore } from 'vuex'

export default createStore({
    state: {
        invoiceModal: null,
        editInvoice: null,
        modalActive: null
    },
    mutations : {
        TOGGLE_INVOICE(state) {
            state.invoiceModal = !state.invoiceModal;
        },
        TOGGLE_MODAL(state) {
            state.modalActive = !state.modalActive;
        },
        
        
        TOGGLE_EDIT_INVOICE(state){
            state.editInvoice = !state.editInvoice
        }
    },
    actions : {},
    modules : {}
})