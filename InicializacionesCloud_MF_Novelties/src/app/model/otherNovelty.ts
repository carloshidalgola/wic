export class OtherNoveltyModel {
    userId: string;
    description: string;
    status: string;
    noveltyId: string;
    ticketId: string;
    comerceId: string;
    date: string;
    consultType: string;
    consultId: string;
    causal: string;
    novelty: string;
    plates: string[];

    constructor(userId: string, description: string, status: string, noveltyId: string, ticketId: string, comerceId: string,
        date: string, consultType: string, consultId: string, causal: string, novelty: string, plates: string[]) {
      this.userId = userId;
      this.description = description;
      this.status = status;
      this.noveltyId = noveltyId;
      this.ticketId = ticketId;
      this.comerceId = comerceId;
      this.date = date;
      this.consultType = consultType;
      this.consultId = consultId;
      this.causal = causal;
      this.novelty = novelty;
      this.plates = plates;
    }
    
}