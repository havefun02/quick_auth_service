import { Inject, Injectable } from '@nestjs/common';
import { FileEntity } from './file.entity';
import { Repository } from 'typeorm';
import { FileDto } from './file.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FileService {
  @InjectRepository(FileEntity)
  private readonly fileRepo: Repository<FileEntity>;

  async getFile(id: number): Promise<FileEntity> {
    return await this.fileRepo.findOne({ where: { id } });
  }
  async uploadFile(fileobject: FileDto): Promise<any> {
    return this.fileRepo.save(fileobject);
  }
}
