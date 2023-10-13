  import { Injectable } from '@nestjs/common';
  import { CreateGithubDto } from './dto/create-github.dto';
  import { UpdateGithubDto } from './dto/update-github.dto';
  import { Octokit } from '@octokit/core';
  
  @Injectable()
  export class GithubService {
  
    private owner : string = 'ldini';
    private repo : string = 'github-api'
  
    constructor(private readonly octokit: Octokit) {
  
    }
  
    //"List repository activities"
    async getCommits() {
      try {
        const resp = await this.octokit.request(`GET /repos/${this.owner}/${this.repo}/commits`);
  
        return await resp.data;
      } 
      catch (error) {
        throw new Error(`Error fetching commits: ${error}`);
      }
    }
  }
