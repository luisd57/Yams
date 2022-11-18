import { CHOICE } from "../enums/choice.enum";

export interface Pastry {

    id: string;
    ref: string;
    name: string;
    description: string;
    quantity: number;
    order: number;
    url?: string;
    tags?: Array<string>;
    like?: string;
    choice?: CHOICE | null;
}
