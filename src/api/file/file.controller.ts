import {
  Controller,
  FileTypeValidator,
  Get,
  Inject,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { FileDto } from './file.dto';
import { FileSizeValidationPipe } from './file.pipe';
@Controller()
export class FileController {
  constructor(private readonly service: FileService) {}
  @Get('/getfile')
  getFile() {}
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1000 * 1000 * 1000 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    let filedto = new FileDto();
    filedto.name = file.filename;
    filedto.path = file.path;
    filedto.size = file.size;
    return this.service.uploadFile(filedto);
  }
}
