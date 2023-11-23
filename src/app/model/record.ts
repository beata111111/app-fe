export interface Record {
  name: string;
  points: number;
}

export interface UserRecord {
  points: number,
  recordIndex: number
}

export interface RecordsInfo {
  userRecord: UserRecord,
  records: Record[]
}