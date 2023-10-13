import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { Octokit } from '@octokit/core';

@Module({
  controllers: [GithubController],
  providers: [GithubService,
    {
      provide: Octokit,
      useValue: new Octokit(),
    }]
})
export class GithubModule {}
