export class RandomUserResponse {

  constructor(private _results: RandomUserInfo[]) {}

  public get results(): RandomUserInfo[] {
    return this._results;
  }
  public set results(value: RandomUserInfo[]) {
    this._results = value;
  }
}

interface RandomUserInfo {
  name: {
    first: string,
    last: string
  },
  location: {
      country: string
  },
  dob: {
      age: number
  },
  picture: {
      large: string
  }
}
