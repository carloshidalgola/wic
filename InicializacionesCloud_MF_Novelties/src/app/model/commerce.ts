export interface Commerce {
  "uniqueCode"?: String,
  "name"?:  String,
  "address"?: String,
  "city"?: String,
  "regional"?: String,
  "selectional"?: String,
  "description"?: Description
}

export interface CommerceDTO extends Omit<Commerce, 'description'> {  }

export interface Description {
  "id": String,
  "terminal": String,
  "terminalType": String,
  "catLevel": String,
  "plate": String,
  "transactionProfile": String,
  "productProfile": String,
  "ubication": String,
  "subPlace": String,
  "store": String,
  "dataphone": String,
  "commerceId": String,
  "technologyInfo": String,
}
