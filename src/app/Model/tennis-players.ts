import { MydateFormatPipe } from "../Helpers/mydate-format.pipe";
import { Address } from "./address";

export class TennisPlayers {
    public id= 0;
    public name='';
    public firstName='';
    public birthDate=new Date;
    public address = new Address;
    public prizeList = [''];

    public constructor(data?: { hasOwnProperty: (arg0: string) => any; id: number; name: string; firstName: string; birthDate: Date; address: any; } | undefined){
        if(!data) return;
        if (data.hasOwnProperty('id'))this.id = data.id;
        if (data.hasOwnProperty('name'))this.name = data.name;
        if (data.hasOwnProperty('firstName'))this.firstName = data.firstName;
        if (data.hasOwnProperty('birthDate'))this.birthDate = data.birthDate;
        if (data.hasOwnProperty('address'))this.address = data.address;
    }
}

