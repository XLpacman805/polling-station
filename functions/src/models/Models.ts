interface option {
    text: string,
    count: number
}

interface poll {
    id: string;
    pollTitle: string;
    options: Array<option>;
    dateCreated: Date;
    expiry: Date;
}

class Poll implements poll {
    id: string;
    pollTitle: string;
    options: Array<option>;
    dateCreated: Date;
    expiry: Date;
    constructor(data: poll) {
        this.id = data.id;
        this.pollTitle = data.pollTitle;
        this.options = data.options;
        this.dateCreated = data.dateCreated;
        this.expiry = data.expiry;
    }

}

export { Poll };