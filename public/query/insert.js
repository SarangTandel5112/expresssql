"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class insert {
    constructor() {
        this.inserttry = () => {
            try {
                return 'insert into `Try` (`Name`,`Age`,`Roll`,`Address`) VALUES(?,?,?,?)';
            }
            catch (error) {
            }
        };
    }
}
exports.default = insert;
