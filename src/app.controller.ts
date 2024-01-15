import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, NestJS!';
  }
}
