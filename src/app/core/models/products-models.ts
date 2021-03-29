export interface MainList {
  id: number;
  mainTitle: string;
  subList: subListArray[];
}
export interface subListArray {
  id: number;
  subTitle: string;
  subDescription: string;
}