import { type } from "os";

interface option {
    text: string,
    count: number
}

interface poll {
    authorId: string;
    pollTitle: string;
    options: Array<option>;
    dateCreated: Date;
    expiry: Date;
}

class Poll implements poll {
    authorId: string;
    pollTitle: string;
    options: Array<option>;
    dateCreated: Date;
    expiry: Date;
    constructor(data: poll) {
        this.authorId = data.authorId;
        this.pollTitle = data.pollTitle;
        this.options = data.options;
        this.dateCreated = data.dateCreated;
        this.expiry = data.expiry;
    }

}

export type { Poll, poll, option }