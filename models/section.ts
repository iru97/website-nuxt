import { Course } from './course';
import { Event } from "./event";
import { Talk } from "./talk";

export interface Section {
    id: number;
    name: string,
    title: string;
    description: string;
    events?: Event[];
    talks?: Talk[];
    courses?: Course[];
}

export type SectionToogleable = Section &  { toogle: boolean };