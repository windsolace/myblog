export class Article {
    private _id: string;
    private _title: string;
    private _description: string;
    private _heroImage: any;
    private _content: string;
    private _date: string;

    get id() {
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }

    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }

    get description() {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }

    get heroImage() {
        return this._heroImage;
    }
    set heroImage(heroImage: string) {
        this._heroImage = heroImage;
    }

    get content() {
        return this._content;
    }
    set content(content: string) {
        this._content = content;
    }

    get date() {
        return this._date;
    }
    set date(date: string) {
        this._date = date;
    }

    
}
