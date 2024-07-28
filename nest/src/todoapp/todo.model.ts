export class ToDo {
    constructor(
        public id: string,
        public title: string,
        public completed: boolean = false // Default value is false
    ) {}
}
