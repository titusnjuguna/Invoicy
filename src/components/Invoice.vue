<template>
    <div class="">
        <router-link class="invoice flex" :to="{ name: 'Invoice' , params: {invoiceid:invoice.invoiceId}}">
            <div class="left flex">
                <span class="tracking-number">#{{ invoice.invoiceId }}</span>
                <span class="due-date">{{ invoice.paymentDueDate }}</span>
                <span class="person">{{ invoice.clientName}}</span>

            </div>
            <div class="right flex">
                <span class="price">
                    {{ invoice.invoiceTotal }}

                </span>
                <div class="status-button flex" :class="{paid:invoice.invoicePaid,pending:invoice.invoicePending,draft:invoice.invoiceDraft}">
                    <span class="" v-if="invoice.invoicePaid">Paid</span>
                    <span class="" v-if="invoice.invoicePending">Pending</span>
                    <span class="" v-if="invoice.invoiceDraft">Draft</span>
                
                </div>
                <div class="icon">
                    <img src="@/assets/icon-arrow-right.svg" alt="" srcset="">
                </div>
            </div>
        
        
        </router-link>
    </div>

</template>
<script>
export default{
    name:"invoice",
    props:["invoice",]

}
</script>
<style lang="scss">
    .invoice {
        text-decoration: none;
        color:white;
        cursor:pointer;
        gap:16px;
        margin-bottom:16px;
        border-radius:20px;
        padding:28px 32px;
        align-items: center;
        background:#1e2139;

    .left{
    align-items: center;
    flex-basis: 60%;
    gap:16px;
    }

    }
  
</style>