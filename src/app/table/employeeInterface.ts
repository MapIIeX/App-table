export interface Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    BirthDate: string;
    Notes: string;
    Address: string;
    isEditing: boolean;
    sortingStatus: boolean;
    cancelRemove: boolean;
    indexOf?: number;
}    