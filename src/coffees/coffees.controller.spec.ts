import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

describe('CoffeesController', () => {
  let controller: CoffeesController;

  // CoffeesServiceのモックを作成
  const mockCoffeesService = {
    findAll: jest.fn(() => []),
    findOne: jest.fn((id) => ({ id: +id, name: 'test', brand: 'test', flavors: [] })),
    create: jest.fn((dto) => dto),
    update: jest.fn((id, dto) => ({ id: +id, ...dto })),
    remove: jest.fn((id) => ({ id: +id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
      providers: [
        {
          provide: CoffeesService,
          useValue: mockCoffeesService, // モックを提供
        },
      ],
    }).compile();

    controller = module.get<CoffeesController>(CoffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
