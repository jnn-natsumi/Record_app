import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number = 0

  @Column()
  public day: number = 0

  @Column()
  public title: string = ""

  @Column()
  public body: string = ""
}