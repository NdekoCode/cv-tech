import { Injectable } from '@angular/core';
import { User } from './../utilities/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  userList: User[] = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
      age: 50,
      gender: 'male',
      email: 'atuny0@sohu.com',
      phone: '+63 791 675 8914',
      username: 'atuny0',
      password: '9uQFF1Lh',
      birthDate: '2000-12-25',
      image: 'assets/images/user-1.png',
      bloodGroup: 'A−',
      height: 189,
      weight: 75.4,
      eyeColor: 'Green',
      hair: {
        color: 'Black',
        type: 'Strands',
      },
      domain: 'slashdot.org',
      ip: '117.29.86.254',
      address: {
        address: '1745 T Street Southeast',
        city: 'Washington',
      },
      company: {
        address: {
          address: '629 Debbie Drive',
          city: 'Nashville',
        },
        department: 'Marketing',
        name: "Blanda-O'Keefe",
        title: 'Help Desk Operator',
      },
    },
    {
      id: 2,
      firstName: 'Sheldon',
      lastName: 'Quigley',
      maidenName: 'Cole',
      age: 28,
      gender: 'male',
      email: 'hbingley1@plala.or.jp',
      phone: '+7 813 117 7139',
      username: 'hbingley1',
      password: 'CQutx25i8r',
      birthDate: '2003-08-02',
      image: 'assets/images/user-2.png',

      address: {
        address: '6007 Applegate Lane',
        city: 'Louisville',
      },
      company: {
        address: {
          address: '8821 West Myrtle Avenue',
          city: 'Glendale',
        },
        department: 'Services',
        name: 'Aufderhar-Cronin',
        title: 'Senior Cost Accountant',
      },
    },
    {
      id: 3,
      firstName: 'Terrill',
      lastName: 'Hills',
      maidenName: 'Hoeger',
      age: 38,
      gender: 'male',
      email: 'rshawe2@51.la',
      phone: '+63 739 292 7942',
      username: 'rshawe2',
      password: 'OWsTbMUgFc',
      birthDate: '1992-12-30',
      image: 'assets/images/user-3.png',

      address: {
        address: '560 Penstock Drive',
        city: 'Grass Valley',
      },
      company: {
        address: {
          address: '18 Densmore Drive',
          city: 'Essex',
        },
        department: 'Marketing',
        name: 'Lindgren LLC',
        title: 'Mechanical Systems Engineer',
      },
    },
    {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      maidenName: 'Maggio',
      age: 49,
      gender: 'male',
      email: 'yraigatt3@nature.com',
      phone: '+86 461 145 4186',
      username: 'yraigatt3',
      password: 'sRQxjPfdS',
      birthDate: '1969-01-16',
      image: 'assets/images/user-4.png',
      bloodGroup: 'B+',
      height: 157,
      weight: 95.9,
      eyeColor: 'Gray',
      hair: {
        color: 'Blond',
        type: 'Very curly',
      },
      domain: 'homestead.com',
      ip: '243.20.78.113',
      address: {
        address: '150 Carter Street',
        city: 'Manchester',
      },
      company: {
        address: {
          address: '210 Green Road',
          city: 'Manchester',
        },
        department: 'Business Development',
        name: 'Wolff and Sons',
        title: 'Paralegal',
      },
    },
    {
      id: 5,
      firstName: 'Mavis',
      lastName: 'Schultz',
      maidenName: 'Yundt',
      age: 38,
      gender: 'male',
      email: 'kmeus4@upenn.edu',
      phone: '+372 285 771 1911',
      username: 'kmeus4',
      password: 'aUTdmmmbH',
      birthDate: '1968-11-03',
      image: 'assets/images/user-5.png',

      address: {
        address: '2721 Lindsay Avenue',
        city: 'Louisville',
      },
      company: {
        address: {
          address: '8398 West Denton Lane',
          city: 'Glendale',
        },
        department: 'Support',
        name: 'Adams Inc',
        title: 'Web Developer I',
      },
    },
    {
      id: 6,
      firstName: 'Alison',
      lastName: 'Reichert',
      maidenName: 'Franecki',
      age: 21,
      gender: 'female',
      email: 'jtreleven5@nhs.uk',
      phone: '+351 527 735 3642',
      username: 'jtreleven5',
      password: 'zY1nE46Zm',
      birthDate: '1969-07-21',
      image: 'assets/images/user-6.png',

      address: {
        address: '18 Densmore Drive',
        city: 'Essex',
      },

      company: {
        address: {
          address: '6231 North 67th Avenue',
          city: 'Glendale',
        },
        department: 'Accounting',
        name: "D'Amore and Sons",
        title: 'Civil Engineer',
      },
    },
    {
      id: 7,
      firstName: 'Oleta',
      lastName: 'Abbott',
      maidenName: 'Wyman',
      age: 31,
      gender: 'female',
      email: 'dpettegre6@columbia.edu',
      phone: '+62 640 802 7111',
      username: 'dpettegre6',
      password: 'YVmhktgYVS',
      birthDate: '1982-02-21',
      image: 'assets/images/user-7.png',
      address: {
        address: '637 Britannia Drive',
        city: 'Vallejo',
      },
      company: {
        address: {
          address: '1407 Walden Court',
          city: 'Crofton',
        },
        department: 'Product Management',
        name: 'Schimmel, Wilderman and Orn',
        title: 'Sales Associate',
      },
      ein: '29-1568401',
      ssn: '478-11-2206',
    },
    {
      id: 8,
      firstName: 'Ewell',
      lastName: 'Mueller',
      maidenName: 'Durgan',
      age: 29,
      gender: 'male',
      email: 'ggude7@chron.com',
      phone: '+86 946 297 2275',
      username: 'ggude7',
      password: 'MWwlaeWcOoF6',
      birthDate: '1964-08-24',
      image: 'https://robohash.org/quiaharumsapiente.png',

      address: {
        address: '5601 West Crocus Drive',
        city: 'Glendale',
      },
      company: {
        address: {
          address: '81 Seaton Place Northwest',
          city: 'Washington',
        },
        department: 'Services',
        name: 'Corkery, Reichert and Hodkiewicz',
        title: 'Clinical Specialist',
      },
    },
    {
      id: 9,
      firstName: 'Demetrius',
      lastName: 'Corkery',
      maidenName: 'Gleason',
      age: 22,
      gender: 'male',
      email: 'nloiterton8@aol.com',
      phone: '+86 356 590 9727',
      username: 'nloiterton8',
      password: 'HTQxxXV9Bq4',
      birthDate: '1971-03-11',
      image: 'https://robohash.org/excepturiiuremolestiae.png',

      address: {
        address: '5403 Illinois Avenue',
        city: 'Nashville',
      },
      company: {
        address: {
          address: '12245 West 71st Place',
          city: 'Arvada',
        },
        department: 'Human Resources',
        name: 'Gorczany Group',
        title: 'Community Outreach Specialist',
      },
    },
    {
      id: 10,
      firstName: 'Eleanora',
      lastName: 'Price',
      maidenName: 'Cummings',
      age: 37,
      gender: 'female',
      email: 'umcgourty9@jalbum.net',
      phone: '+60 184 408 0824',
      username: 'umcgourty9',
      password: 'i0xzpX',
      birthDate: '1958-08-11',
      image: 'https://robohash.org/aliquamcumqueiure.png',

      address: {
        address: '8821 West Myrtle Avenue',
        city: 'Glendale',
      },

      company: {
        address: {
          address: '1649 Timberridge Court',
          city: 'Fayetteville',
        },
        department: 'Marketing',
        name: 'Bins Group',
        title: 'Senior Sales Associate',
      },
    },
    {
      id: 11,
      firstName: 'Marcel',
      lastName: 'Jones',
      maidenName: 'Smith',
      age: 39,
      gender: 'male',
      email: 'acharlota@liveinternet.ru',
      phone: '+967 253 210 0344',
      username: 'acharlota',
      password: 'M9lbMdydMN',
      birthDate: '1961-09-12',
      image: 'https://robohash.org/impeditautest.png',
      address: {
        address: '2203 7th Street Road',
        city: 'Louisville',
      },
      company: {
        address: {
          address: '308 Woodleaf Court',
          city: 'Glen Burnie',
        },
        department: 'Business Development',
        name: 'Kuhn-Harber',
        title: 'Account Executive',
      },
    },
    {
      id: 12,
      firstName: 'Assunta',
      lastName: 'Rath',
      maidenName: 'Heller',
      age: 42,
      gender: 'female',
      email: 'rhallawellb@dropbox.com',
      phone: '+380 962 542 6549',
      username: 'rhallawellb',
      password: 'esTkitT1r',
      birthDate: '1990-12-14',
      image: 'https://robohash.org/namquaerataut.png',
      address: {
        address: '6463 Vrain Street',
        city: 'Arvada',
      },
      company: {
        address: {
          address: '388 East Main Street',
          city: 'Glen Burnie',
        },
        department: 'Product Management',
        name: 'Goodwin-Skiles',
        title: 'Developer II',
      },
    },
  ];
  getUserList(): User[] {
    return this.userList;
  }
  getUserById(userId: number): User | null {
    if (userId) {
      const user = this.userList.find((user) => user.id === userId)!;

      return user;
    }
    return null;
  }
  addCv(cv: User) {
    if (cv) {
      this.userList.push(cv);
    }
  }
}
