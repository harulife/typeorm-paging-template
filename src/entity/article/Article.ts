import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseTimeEntity } from "../BaseTimeEntity";

@Entity()
@Index("idx_article_1", ["title", "reservationDate"])
export class Article extends BaseTimeEntity{
  @Column({ type: "timestamptz", nullable: true })
  reservationDate: Date;

  @Column()
  title: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "bigint" })
  views: number

  @Column()
  isPublished: boolean;

  constructor() {
    super();
  }
}
