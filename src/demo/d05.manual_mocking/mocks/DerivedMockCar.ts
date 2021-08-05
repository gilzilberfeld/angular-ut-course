import { of } from "rxjs";
import { CarService } from "../car.service";


export class DerivedMockCar extends CarService {

    constructor() {
        super();
        this.temperature = of(40, 50, 60);
    }

    isRunning(): boolean {
        return true;
    }


}
