import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create(
      {
        data: {
          name: createCategoryDto.name,
          active: createCategoryDto.active
        }
      }
    );
  }

  findAll() {
    return this.prisma.category.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUniqueOrThrow({
      where: {
        id,
      }
    })
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        name: updateCategoryDto.name,
        active: updateCategoryDto.active
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
