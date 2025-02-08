import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/infrastructure/orm/prisma/service/prisma.service';


@Injectable()
export class BooksService {
  constructor(
    private prismaService: PrismaService,
  ) { }

  // Create a new book
  async create(createBookDto: CreateBookDto) {
    try {
      return await this.prismaService.book.create({
        data: {
          ...createBookDto
        }
      });
    } catch (error) {
      return error;
    }
  }

  // Find all books
  async findAll() {
    try {
      return await this.prismaService.book.findMany();
    } catch (error) {
      return error;
    }
  }

  // Find a book by ISBN
  async findOne(isbn: string) {
    try {
      const book = await this.prismaService.book.findUnique({
        where: { isbn }
      });

      if (!book) {
        throw new Error('Book not found');
      }

      return book;
    } catch (error) {
      return error;
    }
  }

  // Update a book by ISBN
  update(isbn: string, updateBookDto: UpdateBookDto) {
    try {
      return this.prismaService.book.update({
        where: { isbn },
        data: updateBookDto
      });
    } catch (error) {
      return error;
    }
  }

  // Remove a book by ISBN
  remove(isbn: string) {
    try {
      return this.prismaService.book.delete({
        where: { isbn }
      });
    } catch (error) {
      return error;
    }
  }
}
