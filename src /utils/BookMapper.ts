import { BookEntity } from '../entity/Book';

import {BookOutput} from '../grapgQlTypes/outputTypes/outputTypes';



export const mapBookOutput = (data: BookEntity): BookOutput =>{
    const bookOutput = new BookOutput();
    bookOutput.id = data.id;
    bookOutput.BookCode = data.bookCode;
    bookOutput.author = data.author;
    bookOutput.isPublished = data.isPublished;
    return bookOutput; 
}