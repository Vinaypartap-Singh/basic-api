import { Test, TestingModule } from '@nestjs/testing';
import { describe } from 'node:test';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUserService = {
    getAllUser: jest.fn(),
    getSpecificUser: jest.fn(),
    addUser: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{
        provide: UsersService,
        useValue: mockUserService
      }]
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('should return all users', () => {
      const user = [{ id: 12, name: "Vinay", type: "Customer" }]
      mockUserService.getAllUser.mockReturnValue(user)
      expect(controller.getAllUsers()).toEqual(user)
    })
  })
});
