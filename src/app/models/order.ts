export interface Order {
    id: string;
    dateModified: Date;
    status: number;
    paymentMethod: number;
    totalPrice: number;
    userAddress: string;
}
