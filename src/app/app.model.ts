export class Range {
    von: number;
    bis: number;
}

export class Material {
    name: string;
    lieferzeit: Range;
    artikelnummer: string;
    letzterAenderer: number;

    constructor() {
        this.lieferzeit = new Range();
    }
}