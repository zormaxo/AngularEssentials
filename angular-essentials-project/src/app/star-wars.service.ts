import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { LogService } from "./log.service";

@Injectable()
export class StarWarsService {
    private characters = [
        { name: "Luke Skywalker", side: '' },
        { name: "Dark Vader", side: '' }
    ];
    charactersChanged = new Subject();

    constructor(private logService: LogService, private http: HttpClient) { }

    getCharacters(chosenList) {

        if (chosenList === "all") {
            return this.characters.slice();
        }
        return this.characters.filter((char) => {
            return char.side === chosenList
        });
    }

    fetchCharacters() {
        this.http.get("https://swapi.dev/api/people").pipe(
            map((resp:any)=>{
                const extractedChars = resp.results;
                const chars = extractedChars.map(char =>{
                    return { name: char.name, side: "" };
                });
                return chars;
            })
        ).subscribe(data => {
            console.log(data);
            this.characters = data;
            this.charactersChanged.next();
        });
    }

    onSideChosen(charInfo) {
        const pos = this.characters.findIndex((char) => {
            return char.name == charInfo.name;
        })
        this.characters[pos].side = charInfo.side;
        this.charactersChanged.next();
        this.logService.writeLog(`Changed side of ${charInfo.name}, new side: ${charInfo.side}"`);
    }

    addCharacter(name, side) {
        const pos = this.characters.findIndex((char) => {
            return char.name == name;
        })
        if (pos !== -1) return
        const newChar = { name: name, side: side };
        this.characters.push(newChar);

    }
}