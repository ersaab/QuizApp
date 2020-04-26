import { Injectable } from '@angular/core';
import { Result } from "../shared/result.model";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

    marks : Result;

    passvalue(score)
    {
        this.marks = score;
    }

    getvalue()
    {
        return this.marks;
    }
  constructor() { }
}
