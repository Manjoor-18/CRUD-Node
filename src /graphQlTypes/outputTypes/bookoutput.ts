import { Directive, Field, ID, Int, ObjectType } from 'type-graphql';
import { MaxLength } from 'class-validator';
@Directive('@key(fields: "id")')
@ObjectType()
export class BookOutput {
  @Field(() => ID)
  id: string;

  @Field()
  @MaxLength(128)
  BookCode: string;

  @Field({nullable: true})
  @MaxLength(128)
  author: string;

  @Field({nullable: true})
  isPublished: boolean;
}