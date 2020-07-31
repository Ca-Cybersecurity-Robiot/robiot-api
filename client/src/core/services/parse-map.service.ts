import { Injectable } from '@angular/core';

@Injectable({
      providedIn:'root',
})
export class ParseMapService {
    terrain: any = {
        name: 'Terrain 1',
        height: 30,
        width: 50,
        obstacles: [],
        trees: [],
    };

        constructor() { }
    getMap(): void {
        return this.terrain;
    }

    parseFile(file: string): void {
        let fileTab = file.split('\n');
        for (const fil of fileTab) {
            for(var _i = 0; _i < fil.length; _i++) {
                if (fil[_i] === 'O') {
                        const coordo = {x:Number(_i) , y:Number(fileTab.indexOf(fil)) };
                        this.terrain.trees.push(coordo);
                }
                if (fil[_i] === 'X') {
                        const coordo = {x:Number(_i) , y:Number(fileTab.indexOf(fil)) };
                        this.terrain.obstacles.push(coordo);
                }
            }
        }
        this.terrain.height = fileTab.length - 1;
        this.terrain.width = fileTab[0].length - 1;
        console.log(this.terrain);
    }

    }