import { Entity, BaseEntity, PrimaryGeneratedColumn,Column, EntityRepository, Repository } from 'typeorm';
import { Field, ID } from 'type-graphql';
// import {EntityWithIds} from '../customDecorators/entityWithIds';

@Entity({ name: 'Power' })
// @EntityWithIds
export class BookEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Column({length: '128'})
  bookCode: string;
  
  
  @Field(() => String )
  @Column({ length: '128', nullable: true })
  author: string;

  @Field(() => Boolean)
  @Column({ default: false })
  isPublished: boolean;
}

// @EntityRepository(BookEntity)
// export class BookEntityRepository extends Repository<BookEntity> {}
// export type BookEntityEntityRepositoryContext = {
//   bookEntityRepository: BookEntityRepository;
// };

// //Creation of loader context for the entity
// export const makeAssetPowerEquipmentDataLoader = makeDataLoaderMaker(
//   AssetPowerEquipmentEntity,
//   'assetPowerEquipmentInfo',
// );