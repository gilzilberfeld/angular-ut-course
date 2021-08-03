import { CarService } from "../car.service";


export class DerivedMockCar extends CarService {
    isRunning(): boolean {
        return true;
    }
}
