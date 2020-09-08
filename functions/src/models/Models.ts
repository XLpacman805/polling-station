interface option {
    text: string,
    count: number
}

interface poll {
    id: string;
    pollTitle: string;
    options: Array<option>;
    expiry: Date;
}

class Poll implements poll {
    id: string;
    pollTitle: string;
    options: Array<option>;
    expiry: Date;
    constructor(data: poll) {
        this.id = data.id;
        this.pollTitle = data.pollTitle;
        this.options = data.options;
        this.expiry = data.expiry;
    }

}

export { Poll };