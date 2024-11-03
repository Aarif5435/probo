export interface User {
    userId : string;
}

export interface Balance{
    balance: number;
    locked: number
}

export interface INRBALANCES {
    [userId: string]: Balance; 
}

export interface Users {
    [userId: string]: User;
}

export interface ORDERTYPE {
    userId: string;
    quantity: number;
    type: string;
}


export interface ORDERDETAILS {
    total: number;
    orders: ORDERTYPE[];
}

export interface ASSETENTRY {
    yes: {[price: string]: ORDERDETAILS};
    no: {[price: string]: ORDERDETAILS};
}

export interface STATUS {
    quantity: number,
	locked: number
}

export interface TRADEOPTION {
    yes?: STATUS;
    no?: STATUS;
}

export interface MARKETOPTION {
    [symbol: string]: TRADEOPTION;
}

export interface STORCKBALANCES {
    [userId: string] : MARKETOPTION;
}

export interface ORDERBOOK {
    [symbol: string]: ASSETENTRY;

}
