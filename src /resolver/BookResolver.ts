import { Resolver, Query, Mutation, Arg, InputType } from 'type-graphql';
import { BookEntity } from '../entity/Book';
import { UpdateBookInput } from '../grapgQlTypes/inputTypes/UpdateBookInput';
import {BookOutput} from '../grapgQlTypes/outputTypes/outputTypes';
import {mapBookOutput} from '../utils/BookMapper';
@Resolver()
export class BookResolver {
  @Query(() => [BookOutput])
 async books(): Promise<BookOutput []> {
    const searchResult =  await BookEntity.find();
    const response = searchResult.map((element: BookEntity) => mapBookOutput(element));
    return response;
  }

  // @Query(() => BookEntity)
  // book(@Arg('id') id: string) {
  //   return BookEntity.findOne({ where: { id } });
  // }

  // @Mutation(() => BookEntity)
  // async createBook(@Arg('data') data: CreateBookInput) {
  //   const book = BookEntity.create(data)
  //   await book.save();
  //   return book;
  // }

  // @Mutation(() => BookEntity)
  // async updateBook(@Arg('id') id: string, @Arg('data') data: UpdateBookInput) {
  //   const book = await BookEntity.findOne({ where: { id } });
  //   if (!book) throw new Error('BookEntity not found');
  //   Object.assign(book, data);
  //   await book.save();
  //   return book;
  // }

  // @Mutation(() => BookEntity)
  // async deleteBook(@Arg('id') id: string) {
  //   const book = await BookEntity.findOne({ where: { id } });
  //   if (!book) throw new Error('BookEntity not found');
  //   await book.remove();
  //   return true;
  // }
}
