import { Employee } from './employeeInterface';

export class EmployeesDataService {
    create(array: Array<Employee>){
        let objectTemplate = {
            ID: array.length + 1,
            FirstName: '',
            LastName: '',
            BirthDate: `${new Date()}`,
            Notes: '',
            Address: '',
            isEditing: true,
            sortingStatus: false,
            cancelRemove: true
        }
        array.push(objectTemplate);
    }
    change(object: Employee) {
        object.isEditing = !object.isEditing
    }
    confirm(object: Employee, array: Array<Employee>){
        object.isEditing = !object.isEditing;
        array[object.indexOf] = object;
        let transfer = JSON.stringify(array[object.indexOf]);
        localStorage.setItem(`${object.ID}`, transfer)
        object.cancelRemove = false
    }
    remove(object: Employee, array: Array<Employee>) {
        array.splice(array.indexOf(object), 1)
        localStorage.removeItem(`${object.ID}`)
    }
    cancelDelete(object: Employee, array: Array<Employee>){
        array.splice(array.indexOf(object), 1)
    }
    cancelRestore(object: Employee){
        object.isEditing = !object.isEditing
        let templateJSON = JSON.parse(localStorage.getItem(`${object.ID}`))
        object.ID = templateJSON.ID
        object.FirstName = templateJSON.FirstName
        object.LastName = templateJSON.LastName
        object.BirthDate = templateJSON.BirthDate
        object.Notes = templateJSON.Notes
        object.Address = templateJSON.Address
    }
    disableButton(array: Array<Employee>) {
        for(let element of array) {
            if(element.isEditing == true){
                return true
            } 
        }
        return false
    }
    sortFirstNamesStraight(array: any) {
        array.sort((a: any, b: any) => {
            let firstNameA = a.FirstName.toLowerCase(), firstNameB = b.FirstName.toLowerCase();
            if (firstNameA < firstNameB) {
                return -1
            }
            if (firstNameA < firstNameB) {
                return 1
            }
            return 0
        });
        array.sortingStatus = !array.sortingStatus
    }
    sortFirstNamesReverse(array: any){
        array.reverse()
        array.sortingStatus = !array.sortingStatus
    }    
    
    employees: Array<object> = [{
        ID: 1,
        FirstName: "John",
        LastName: "Heart",
        BirthDate: new Date(),
        Notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
        Address: "351 S Hill St.",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false
    }, {
        ID: 2,
        FirstName: "Olivia",
        LastName: "Peyton",
        BirthDate: new Date(), 
        Notes: "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
        Address: "807 W Paseo Del Mar",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false
    }, {
        ID: 3,
        FirstName: "Robert",
        LastName: "Reagan",
        BirthDate: new Date(),
        Notes: "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
        Address: "4 Westmoreland Pl.",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false
    }, {
        ID: 4,
        FirstName: "Greta",
        LastName: "Sims",
        BirthDate: new Date(),
        Notes: "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
        Address: "1700 S Grandview Dr.",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false
    }, {
        ID: 5,
        FirstName: "Brett",
        LastName: "Wade",
        BirthDate: new Date(),
        Notes: "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
        Address: "1120 Old Mill Rd.",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false
    }, {
        ID: 6,
        FirstName: "Sandra",
        LastName: "Johnson",
        BirthDate: new Date(),
        Notes: "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
        Address: "4600 N Virginia Rd.",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false
    }, {
        ID: 7,
        FirstName: "Kevin",
        LastName: "Carter",
        BirthDate: new Date(),
        Notes: "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
        Address: "424 N Main St.",
        isEditing: false,
        sortingStatus: false
    }, {
        ID: 8,
        FirstName: "Cynthia",
        LastName: "Stanwick",
        BirthDate: new Date(),
        Notes: "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
        Address: "2211 Bonita Dr.",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false   
    }, {
        ID: 9,
        FirstName: "Kent",
        LastName: "Samuelson",
        BirthDate: new Date(),
        Notes: "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
        Address: "12100 Mora Dr",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false    
    }, {
        ID: 10,
        FirstName: "Taylor",
        LastName: "Riley",
        BirthDate: new Date(),
        Notes: "If you are like the rest of us at DevAV, then you've probably reached out for help from Taylor. He does a great job as a member of our IT department.",
        Address: "7776 Torreyson Dr",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false         
    }, {
        ID: 11,
        FirstName: "Sam",
        LastName: "Hill",
        BirthDate: new Date(),
        Notes: "Sammy is proud to be a member of the DevAV team. He joined the team in 2012 and has been in the sales department from the beginning.\r\n\r\nHe has just picked up golf so you can find him on the links every weekend.",
        Address: "645 Prospect Crescent",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false         
    }, {
        ID: 12,
        FirstName: "Kelly",
        LastName: "Rodriguez",
        BirthDate: new Date(),
        Notes: "Kelly loves people and that's why she joined DevAV's support department. One of the funniest people in the company, she does stand-up on the weekends at the Laugh Factory.",
        Address: "1601 W Mountain St.",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false      
    }, {
        ID: 13,
        FirstName: "Natalie",
        LastName: "Maguirre",
        BirthDate: new Date(),
        Notes: "Natalie travels the US and teaches our partners how to explain the benefits of our products to customers.\r\n\r\nShe is a proud wife and mom and volunteers her time at the elementary school.",
        Address: "6400 E Bixby Hill Rd",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false    
    }, {
        ID: 14,
        FirstName: "Walter",
        LastName: "Hobbs",
        BirthDate: new Date(),
        Notes: "Walter has been developing apps and websites for DevAV since 2011. His passion is software and if you ever walk by his desk, you'll know why.\r\n\r\nWally once worked 72 hours straight - writing code and fixing bugs.",
        Address: "10385 Shadow Oak Dr",
        isEditing: false,
        sortingStatus: false,
        cancelRemove: false         
    }];
}

