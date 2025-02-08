import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
      return error;      
    }
  }

  @Get()
  findAll() {
    try {
      return this.booksService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':isbn')
  findOne(@Param('isbn') isbn: string) {
    try {
      return this.booksService.findOne(isbn);
    } catch (error) {
      return error;
    }
  }

  @Patch(':isbn')
  update(@Param('isbn') isbn: string, @Body() updateBookDto: UpdateBookDto) {
    try {
      return this.booksService.update(isbn, updateBookDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':isbn')
  remove(@Param('isbn') isbn: string) {
    try {
      return this.booksService.remove(isbn);
    } catch (error) {
      return error;      
    }
  }
}
