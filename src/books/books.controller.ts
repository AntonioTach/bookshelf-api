import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    try {
      return this.booksService.create(createBookDto);
    } catch (error) {
      throw new HttpException(
        error.message || "Error creating book",
        HttpStatus.INTERNAL_SERVER_ERROR
      );   
    }
  }

  @Get()
  findAll() {
    try {
      return this.booksService.findAll();
    } catch (error) {
      throw new HttpException(
        error.message || "Error getting books",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get(':isbn')
  findOne(@Param('isbn') isbn: string) {
    try {
      return this.booksService.findOne(isbn);
    } catch (error) {
      throw new HttpException(
        error.message || "Error getting book",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(':isbn')
  update(@Param('isbn') isbn: string, @Body() updateBookDto: UpdateBookDto) {
    try {
      return this.booksService.update(isbn, updateBookDto);
    } catch (error) {
      throw new HttpException(
        error.message || "Error updating book",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Delete(':isbn')
  remove(@Param('isbn') isbn: string) {
    try {
      return this.booksService.remove(isbn);
    } catch (error) {
      throw new HttpException(
        error.message || "Error deleting book",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
