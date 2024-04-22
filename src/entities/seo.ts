import { IsString } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { NewsEntity } from "./news";

@Entity({ name: "seo" })
export class SeoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  @IsString()
  meta_title: string;

  @Column({ type: "varchar" })
  meta_description: string;

  @Column({ type: "varchar" })
  meta_key: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updateAt: Date;

  @ManyToOne(() => NewsEntity, (news) => news.seo,{ onDelete: "CASCADE", onUpdate: "CASCADE" })
  news: NewsEntity;
}
