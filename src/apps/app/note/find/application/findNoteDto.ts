export interface IFindNoteAllDto {
  key: string;
  page?: number;
  limit?: number;
}

export interface IFindNoteByIdNotebook {
  key: string;
  idNotebook: string;
}
