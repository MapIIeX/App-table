import { Component, OnInit } from '@angular/core';
import { EmployessDataService } from './employeesDataService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    constructor() {
        this.employees = new EmployessDataService().employees
    }
    employees: any = []
    ngOnInit(): void {
    }

    getId(object: any) {
        console.log(object.ID)
    }
    moveArrayToLocalStorage(array){

    }
    autoFocus = true;
    pushArray(array: any) {
        let id = array.length + 1
        array.push({
            "ID": id,
            "FirstName": '',
            "LastName": '',
            "BirthDate": new Date(),
            "Notes": '',
            "Address": '',
            "isEditing": true
        })
    }
    sortFirstNamesStraight() {
        this.employees.sort((a: any, b: any) => {
            let firstNameA = a.FirstName.toLowerCase(), firstNameB = b.FirstName.toLowerCase();
            if (firstNameA < firstNameB) {
                return -1
            }
            if (firstNameA < firstNameB) {
                return 1
            }
            return 0
        });
        this.employees.sortingStatus = !this.employees.sortingStatus
    }
    sortFirstNamesReverse(){
        this.employees.reverse()
        this.employees.sortingStatus = !this.employees.sortingStatus
    }
    editMode(object: any) {
        object.isEditing = !object.isEditing
    }

    disableButton(array: any) {
        for(let element of array) {
            if(element.isEditing == true){
                return true
            } 
        }
        return false
    }
    currentDataArray: Array<any> = [];
    dataForCancelButton(object: any) {
        this.currentDataArray.push(object);
    }
    deleteTableLine(object: any){
        this.employees.splice(this.employees.indexOf(object),1)
    }
    testChecker(event){
        console.log(event);
    }
}




