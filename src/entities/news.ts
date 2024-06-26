import { IsString } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { SeoEntity } from "./seo";

@Entity({ name: "news" })
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 300 })
  @IsString()
  title_uz: string;

  @Column({ type: "varchar", length: 300 })
  @IsString()
  title_en: string;

  @Column({ type: "varchar", length: 300 })
  @IsString()
  title_ru: string;

  @Column({ type: "varchar", length: 2000 })
  @IsString()
  description_uz: string;

  @Column({ type: "varchar", length: 2000 })
  @IsString()
  description_en: string;

  @Column({ type: "varchar", length: 2000 })
  @IsString()
  description_ru: string;

  @Column({ type: "varchar", nullable: true })
  @IsString()
  image: string;
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updateAt: Date;

  @OneToMany(() => SeoEntity, (seo) => seo.news,{ onDelete: "CASCADE", onUpdate: "CASCADE" })
  seo: SeoEntity[];
}
