export interface Transaction {
    eventId: string; //?
    topic: TRANSACTION_EVENTS; //?
    /*event?*/type: string;
    transactionId: string; //?
    originalTransactionId: string;
    postingDate: 'POSTING_DATE'; //?
    amount: string;
}