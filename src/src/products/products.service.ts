import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return {
      data: [
        {
          id: 1,
          name: 'Product 1',
          price: 100,
          img: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg',
          category_id: 1,
          category_name: 'Category 1',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 100,
          img: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg',
          category_id: 2,
          category_name: 'Category 2',
        },
        {
          id: 3,
          name: 'Product 3',
          price: 100,
          img: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg',
          category_id: 3,
          category_name: 'Category 3',
        },
      ],
      meta: {
        prev: null,
        next: null,
        currentPage: 1,
      },
    };
  }

  findOne(id: number) {
    return { data: undefined };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
