import { Uuid } from '../../../shared/domain/value-object/Uuid';

type params = { id?: Uuid; idNotebook: Uuid; note: string; created: Date; dateUpdate?: Date };

export class Note {
  public readonly idNote: Uuid;
  public readonly idNotebook: Uuid;
  public readonly note: string;
  public readonly created: Date;
  public readonly dateUpdate?: Date;

  constructor(params: params) {
    this.idNote = params.id == undefined ? Uuid.random() : params.id;
    this.idNotebook = params.idNotebook;
    this.note = params.note;
    this.created = params.created;
    this.dateUpdate = params.dateUpdate;
  }

  toPrimitives() {
    return {
      idNote: this.idNote.value,
      idNotebook: this.idNotebook.value,
      note: this.note,
      created: this.created,
      dateUpdate: this.dateUpdate,
    };
  }
}
