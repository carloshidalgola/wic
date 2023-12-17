export class ParameterModel {
    code: Number;
    description: string;
    textValue: string;
    numberValue: number;
    order: Number;
    parentId: Number;

    constructor(code: Number, description: string, textValue: string, numberValue: number, order: Number, parentId: Number) {
      this.code = code;
      this.description = description;
      this.textValue = textValue;
      this.numberValue = numberValue;
      this.order = order;
      this.parentId = parentId;
    }
}

export interface ParameterConsultTypeModel {
  code: Number;
  description: string;
  textValue: string;
  numberValue: Number;
  order: Number;
  parentId: Number;
}
