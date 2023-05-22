import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Gifs} from "./../interface/gifs.interface";

@Injectable()
export class GetGifsService{

    constructor(private http: HttpClient){
       
    }

    api_key: String = "3iFPzED3GkzXeeRNZ1tCQf5LOWK8j4L6";
    url: String = "https://api.giphy.com/v1";
    limit: number = 10;

    private historial: string[] = [];
    results: Gifs[] = [];

    get Historial(){
        return [...this.historial];
    }

    get Results(){
        return [...this.results];
    }

    setHistorial = (term: string) =>{
        term = term.trim().toLocaleLowerCase();
        if(!this.Historial.includes(term)){
            this.historial.unshift(term);
            this.historial = this.historial.splice(0,10);
            localStorage.setItem("historial", JSON.stringify(this.Historial));
        }
        if(this.Historial.includes("")){this.historial.splice(this.historial.indexOf(""));}
    }

    getGifs = (term: String): Observable<Gifs[]> =>{
        return this.http.get<Gifs[]>(`${this.url}/gifs/search?api_key=${this.api_key}&q=${term}&limit=${this.limit}`)
        .pipe(map((resp: any)=> {
            localStorage.setItem("results", JSON.stringify(resp.data));
            return this.results = resp
        }));
    }

}