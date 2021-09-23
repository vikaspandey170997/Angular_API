import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

@Injectable()

export class NasaApiService {

  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    //return this.DATA;

    return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
  }
}
