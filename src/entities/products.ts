import { IsString } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";
import { CategoryEntity } from "./category";

@Entity({ name: "products" })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  @IsString()
  title_uz: string;

  @Column({ type: "varchar" })
  @IsString()
  title_ru: string;

  @Column({ type: "varchar" })
  @IsString()
  title_en: string;

  @Column({ type: "varchar" })
  @IsString()
  description_uz: string;

  @Column({ type: "varchar" })
  @IsString()
  description_ru: string;

  @Column({ type: "varchar" })
  @IsString()
  description_en: string;

  @Column({ type: "varchar" })
  @IsString()
  text_uz: string;

  @Column({ type: "varchar" })
  @IsString()
  text_ru: string;

  @Column({ type: "varchar" })
  @IsString()
  text_en: string;

  @Column({ type: "varchar",array:true,nullable:true })
  @IsString()
  size: string[];

  @Column({ type: "varchar",array:true,nullable:true })
  @IsString()
  image: string[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updateAt: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.products,{ onDelete: "CASCADE", onUpdate: "CASCADE" })
  category: CategoryEntity;
}
