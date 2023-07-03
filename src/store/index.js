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
    actions : {
        async GET_INVOICES({commit,state}){
            const getData = db.collection('invoices');
            const results  = await getData(); 
            results.forEach( doc => { if (!state.invoiceData.some(invoice => invoice.docId === doc.id)){
                const data = {
                    docId : doc.id,
                    invoiceId: doc.data().invoiceId,
                    billerStreetAddress: doc.data().billerStreetAddress,
                    billerCity: doc.data().billerCity,
                    billerZipCode: doc.data().billerZipCode,
                    billerCountry: doc.data().billerCountry,
                    clientName: doc.data().clientName,
                    clientEmail: doc.data().clientEmail,
                    clientStreetAddress: doc.data().clientStreetAddress,
                    clientCity: doc.data().clientCity,
                    clientZipCode: doc.data().clientZipCode,
                    clientCountry: doc.data().clientCountry,
                    invoiceDate: doc.data().invoiceDate,
                    invoiceDateUnix: doc.data().invoiceDateUnix,
                    paymentTerms: doc.data().paymentTerms,
                    paymentDueDate: doc.data().paymentDueDate,
                    paymentDueDateUnix: doc.data().paymentDueDateUnix,
                    productDescription: doc.data().productDescription,
                    invoiceItemList: doc.data().invoiceItemList,
                    invoiceTotal: doc.data().invoiceTotal,
                    invoicePending: doc.data().invoicePending,
                    invoiceDraft: doc.data().invoiceDraft,
                    invoicePaid: doc.data().invoicePaid,
            

                }

            }
                
            });

        }
    },
    modules : {}
})