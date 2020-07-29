import { Component, OnInit } from '@angular/core';
import { EmployeesDataService } from './employeesDataService';
import { analyzeAndValidateNgModules, MethodCall } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

    constructor() {

    }
    
    employees: any = new EmployeesDataService().employees                                       
    employeesFromLocalStorage: any = []

    ngOnInit() {
        for(let item in localStorage){                                                          // При первоначальной загрузке
            let fromLS = localStorage.getItem(item)                                             // вытягиваем
            this.employeesFromLocalStorage.push(JSON.parse(fromLS))                             // с локал стореджа
        }                                                                                       // 

        this.employeesFromLocalStorage.splice(this.employeesFromLocalStorage.length - 6, 6)     // лишние свойста localStorage(getItem, length и т.д.)

        this.employeesFromLocalStorage.sort(function(a, b){                                     // Сортировке по номеру
            return a.ID - b.ID                                                                  // ID 
        })                                                                                      // при первоначальной загрузке
    }

    notMockDataToLS(){                                                                          // Залив данных в 
        for(let employee of this.employees) {                                                   // localStorage
            let employeeJSON = JSON.stringify(employee);                                        // (это
            localStorage.setItem(employee.ID, employeeJSON)                                     //  тестовые данные
        }                                                                                       //  т.е. не настоящие)
    }
    
    edit = new EmployeesDataService().change                                                    //
    save = new EmployeesDataService().confirm                                                   //
    delete = new EmployeesDataService().remove                                                  //
    create = new EmployeesDataService().create                                                  //  
    cancelDelete = new EmployeesDataService().cancelDelete                                      // Методы  
    cancelRestore = new EmployeesDataService().cancelRestore                                    //
    disableButton = new EmployeesDataService().disableButton                                    //
    sortFirstNamesStraight = new EmployeesDataService().sortFirstNamesStraight                  //
    sortFirstNamesReverse = new EmployeesDataService().sortFirstNamesReverse                    //
}






